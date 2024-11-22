import React, { useState } from "react";
import { jsPDF } from "jspdf";
import Typewriter from 'typewriter-effect';

function TextToPDFConverter() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "text/plain") {
      setSelectedFile(file);
    } else {
      alert("Please select a valid text file.");
    }
  };

  const handleConvertToPDF = () => {
    if (!selectedFile) {
      alert("Please upload a text file.");
      return;
    }

    const reader = new FileReader();
    reader.onload = function (event) {
      const text = event.target.result;

      // Initialize jsPDF
      const pdf = new jsPDF();

      // Add text to PDF
      pdf.text(text, 10, 10);

      // Download the PDF
      pdf.save("converted.pdf");
    };

    reader.readAsText(selectedFile);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-2">
        <Typewriter options={{autoStart: true, loop: true, strings: ['Convert ODT to PDF Instantly']}}/>

        </h1>
        <p className="text-lg text-gray-700">Fast, Free, and secure File Conversion</p>
      </header>
      <img src=""/>

      <div className="flex flex-col items-center">
        <input
          type="file"
          accept=".txt"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-600 file:text-white
            hover:file:bg-blue-700"
        />

        {selectedFile && (
          <p className="mt-4 text-gray-700">
            Selected File: <strong>{selectedFile.name}</strong>
          </p>
        )}
      </div>

      <button
        onClick={handleConvertToPDF}
        className="mt-6 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Convert to PDF
      </button>
    </div>
  );
}

export default TextToPDFConverter;