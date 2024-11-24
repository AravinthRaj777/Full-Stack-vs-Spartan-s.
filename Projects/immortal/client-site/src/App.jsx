import React, { useState } from "react";
import { jsPDF } from "jspdf";
import { HiOutlineCloudUpload } from "react-icons/hi";
import { AiFillFileText, AiFillFileImage, AiFillFilePdf } from "react-icons/ai";
import TypeWriter from 'typewriter-effect';

const TextToPdfConverter = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No file selected");
  const [fileType, setFileType] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle drag over event
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // Handle file drop
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const droppedFile = e.dataTransfer.files[0];

    if (droppedFile) {
      // Validate the file type
      if (droppedFile.type.includes("text")) {
        setFile(droppedFile);
        setFileName(droppedFile.name);
        setFileSize((droppedFile.size / 1024).toFixed(2) + " KB");
        setFileType(droppedFile.type);
        setError("");
      } else {
        setError("Unsupported file type. Please upload a text file.");
        setFile(null);
        setFileName("No file selected");
        setFileSize("");
        setFileType("");
      }
    }
  };

  // Handle file selection through input
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.type.includes("text")) {
        setFile(selectedFile);
        setFileName(selectedFile.name);
        setFileSize((selectedFile.size / 1024).toFixed(2) + " KB");
        setFileType(selectedFile.type);
        setError("");
      } else {
        setError("Unsupported file type. Please upload a text file.");
        setFile(null);
        setFileName("No file selected");
        setFileSize("");
        setFileType("");
      }
    }
  };

  // File type icon selector
  const renderFileIcon = () => {
    if (fileType.includes("text")) {
      return <AiFillFileText size={60} className="text-gray-700" />;
    } else if (fileType.includes("image")) {
      return <AiFillFileImage size={60} className="text-gray-700" />;
    } else if (fileType.includes("pdf")) {
      return <AiFillFilePdf size={60} className="text-gray-700" />;
    } else {
      return <HiOutlineCloudUpload size={60} className="text-gray-700" />;
    }
  };

  // Convert text to PDF
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

      const margin = 10;
      const pageHeight = pdf.internal.pageSize.getHeight();
      const pageWidth = pdf.internal.pageSize.getWidth();
      const maxLineWidth = pageWidth - margin * 2;
      const lineHeight = 10;
      const fontSize = 12;
      let y = margin;

      pdf.setFontSize(fontSize);

      const lines = pdf.splitTextToSize(text, maxLineWidth);
      lines.forEach((line) => {
        if (y + lineHeight > pageHeight - margin) {
          pdf.addPage();
          y = margin;
        }
        pdf.text(line, margin, y);
        y += lineHeight;
      });

      const pdfData = pdf.output("blob");
      const link = document.createElement("a");
      link.href = URL.createObjectURL(pdfData);
      link.download = "converted.pdf";
      link.click();

      setLoading(false);
    };

    reader.onerror = () => {
      alert("Error reading file. Please try again.");
      setLoading(false);
    };

    reader.readAsText(file);
  };

  return (
    <div className="min-h-screen flex flex-col items-center  bg-gray-100 py-10">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-2">
          <TypeWriter options={{autoStart:true, loop:true, strings:['Convert txt to Pdf Instantly']}}/>
        </h1>
        <p className="text-lg text-gray-700">Fast,Free, and Secure File Conversion</p>
      </header>
      

      {/* Drag and Drop Box */}
      <div
        className="w-96 h-64 border-2 border-dashed border-blue-500 rounded-lg flex flex-col justify-center items-center cursor-pointer"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => document.getElementById("fileInput").click()}
      >
        <input
          type="file"
          className="hidden"
          id="fileInput"
          accept=".txt"
          onChange={handleFileChange}
        />
        {file ? renderFileIcon() : <HiOutlineCloudUpload size={60} />}
        <p className="mt-2 text-sm text-gray-500">{fileName}</p>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mt-4 p-4 bg-red-100 text-red-600 rounded-md">
          {error}
        </div>
      )}

      {/* File Details */}
      {file && !error && (
        <div className="mt-6 p-4 bg-white rounded-md shadow-md w-96">
          <h2 className="font-semibold text-lg text-gray-800">File Details:</h2>
          <ul className="list-disc pl-5 text-gray-700 mt-2">
            <li>
              <strong>File Name:</strong> {fileName}
            </li>
            <li>
              <strong>File Size:</strong> {fileSize}
            </li>
          </ul>
        </div>
      )}

      {/* Convert to PDF Button */}
      <div className="mt-6">
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