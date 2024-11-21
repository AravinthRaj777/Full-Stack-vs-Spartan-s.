import express from 'express';
import multer from 'multer';
import libre from 'libreoffice-convert';
import fs from 'fs';
import path from 'path';

const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/convert', upload.single('file'), (req, res) => {
  const file = req.file;

  if (!file) {
    return res.status(400).send('No file uploaded.');
  }

  const odtPath = file.path;
  const pdfPath = path.join('uploads', `${file.filename}.pdf`);

  // Convert ODT to PDF
  const input = fs.readFileSync(odtPath);
  libre.convert(input, '.pdf', undefined, (err, done) => {
    if (err) {
      console.error(`Error converting file: ${err}`);
      return res.status(500).send('Error converting file.');
    }

    // Write the PDF to the response
    fs.writeFileSync(pdfPath, done);
    res.download(pdfPath, 'converted.pdf', () => {
      // Cleanup
      fs.unlinkSync(odtPath);
      fs.unlinkSync(pdfPath);
    });
  });
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});