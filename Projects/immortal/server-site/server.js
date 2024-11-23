const express = require("express");
const multer = require("multer");
const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");

const app = express();
const upload = multer({ dest: "uploads/" });

app.post("/convert", upload.single("file"), (req, res) => {
  const file = req.file;

  if (!file) {
    return res.status(400).send("No file uploaded.");
  }

  const inputPath = path.resolve(file.path);
  const outputPath = path.resolve(`uploads/${file.originalname}.pdf`);

  exec(`unoconv -f pdf -o ${outputPath} ${inputPath}`, (err) => {
    if (err) {
      return res.status(500).send("Error during conversion.");
    }

    res.download(outputPath, "converted.pdf", (downloadErr) => {
      if (downloadErr) {
        console.error("Error sending file:", downloadErr);
      }

      // Cleanup temporary files
      fs.unlinkSync(inputPath);
      fs.unlinkSync(outputPath);
    });
  });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});