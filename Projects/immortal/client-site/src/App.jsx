//import React, { useState } from "react";

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isConverting, setIsConverting] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleConversion = async () => {
    if (!selectedFile) {
      alert("Please upload an ODT file.");
      return;
    }

    setIsConverting(true);

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("http://localhost:5000/convert", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);

        // Trigger download
        const a = document.createElement("a");
        a.href = url;
        a.download = `${selectedFile.name.replace(".odt", ".pdf")}`;
        document.body.appendChild(a);
        a.click();
        a.remove();

        alert("Conversion successful!");
      } else {
        alert("Error during conversion. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }

    setIsConverting(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-2">
          Convert ODT to PDF Instantly
        </h1>
        <p className="text-lg text-gray-700">
          Fast, Free, and Secure File Conversion
        </p>
      </header>

      {/* File Upload Section */}
      <section className="mb-8">
        <label className="flex flex-col items-center px-6 py-3 bg-white border rounded-lg shadow-md cursor-pointer hover:bg-gray-50">
          <span className="text-gray-600">Upload ODT File</span>
          <input
            type="file"
            accept=".odt"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
        {selectedFile && (
          <p className="mt-4 text-gray-700">
            Selected File: <strong>{selectedFile.name}</strong>
          </p>
        )}
      </section>

      {/* Key Features Section */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
        <div className="feature-card text-center p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">
            Fast Conversion
          </h3>
          <p className="text-gray-600">Convert your files in seconds, no wait time.</p>
        </div>
        <div className="feature-card text-center p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">
            Free & Secure
          </h3>
          <p className="text-gray-600">No sign-up, 100% privacy guaranteed.</p>
        </div>
        <div className="feature-card text-center p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">
            Easy to Use
          </h3>
          <p className="text-gray-600">
            Just upload your ODT file and click convert!
          </p>
        </div>
      </section>

      {/* Convert Button */}
      <section>
        <button
          onClick={handleConversion}
          className={`px-6 py-3 ${
            isConverting ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"
          } text-white font-bold text-lg rounded-lg transition duration-300`}
          disabled={isConverting}
        >
          {isConverting ? "Converting..." : "Start Conversion"}
        </button>
      </section>
    </div>
  );
}

export default App;