import React, { useState } from "react";
import { jsPDF } from "jspdf"; 
import { MdCloudUpload, MdDelete} from 'react-icons/md';
import { AiFillFileImage} from 'react-icons/ai';



const TextToPdfConverter = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("No selected file");

  // Handle file selection
  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setFileName(uploadedFile.name);
    }
  };

  // Handle drag over event
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // Handle drop event
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const uploadedFile = e.dataTransfer.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setFileName(uploadedFile.name);
    }
  };

  // Trigger the file input dialog
  const handleClick = () => {
    document.getElementById("fileInput").click();
  };

  const convertToPDF = () => {
    if (!file) {
      alert("Please upload a text file.");
      return;
    }

    setLoading(true);

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target.result;

      // Initialize jsPDF
      const pdf = new jsPDF();

      // Define margins and font properties
      const margin = 10;
      const pageHeight = pdf.internal.pageSize.getHeight();
      const pageWidth = pdf.internal.pageSize.getWidth();
      const maxLineWidth = pageWidth - margin * 2;
      const lineHeight = 10;
      const fontSize = 12;
      let y = margin;

      pdf.setFontSize(fontSize);

      // Split text into lines that fit the page width
      const lines = pdf.splitTextToSize(text, maxLineWidth);

      lines.forEach((line) => {
        if (y + lineHeight > pageHeight - margin) {
          // If the text overflows the current page, add a new page
          pdf.addPage();
          y = margin;
        }
        pdf.text(line, margin, y);
        y += lineHeight;
      });

      // Create a link to download the file without opening in a new tab
      const pdfData = pdf.output("blob"); // Create a blob of the PDF data
      const link = document.createElement("a");
      link.href = URL.createObjectURL(pdfData);
      link.download = "converted.pdf"; // Specify the file name
      link.click(); // Trigger the download

      setLoading(false);
    };

    reader.onerror = () => {
      alert("Error reading file. Please try again.");
      setLoading(false);
    };

    reader.readAsText(file);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-2xl font-bold text-blue-600 mb-2">
        Convert Text File to PDF
      </h1>
      <main>
        <form
          className="flex flex-col justify-center place-items-center border-2 border-dashed border-[#1475cf] h-[250px] w-[500px] cursor-pointer rounded-[25px] bg-white"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onClick={handleClick}
        >
          <img src=""></img>
          
          <input
            id="fileInput"
            type="file"
            accept="text/plain"
            onChange={handleFileChange}
            className="hidden"
          />
          <p>Drag & Drop a text file here or click to upload</p>
          {file && <p className="mt-2">{fileName}</p>}
        </form>
      </main>
      <div className="mt-4">
        <button
          onClick={convertToPDF}
          className={`px-4 py-2 text-white rounded-md w-full max-w-md ${
            loading
              ? "bg-blue-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
          disabled={loading}
        >
          {loading ? "Processing..." : "Convert to PDF"}
        </button>
        {loading && (
          <div className="mt-4 w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        )}
      </div>
    </div>
  );
};

export default TextToPdfConverter;
