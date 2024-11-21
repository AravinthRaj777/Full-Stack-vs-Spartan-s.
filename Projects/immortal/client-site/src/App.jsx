import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-2">Convert ODT to PDF Instantly</h1>
        <p className="text-lg text-gray-700">Fast, Free, and Secure File Conversion</p>
      </header>

      {/* Main Icon Section */}
      <section className="flex items-center mb-12">
        <div className="flex flex-col items-center mx-4">
          <img src="odt-icon.png" alt="ODT File" className="w-16 h-16 mb-2" />
          <p className="text-gray-600">ODT</p>
        </div>

        <span className="text-3xl text-gray-600">→</span>

        <div className="flex flex-col items-center mx-4">
          <img src="pdf-icon.png" alt="PDF File" className="w-16 h-16 mb-2" />
          <p className="text-gray-600">PDF</p>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
        <div className="feature-card text-center p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Fast Conversion</h3>
          <p className="text-gray-600">Convert your files in seconds, no wait time.</p>
        </div>
        <div className="feature-card text-center p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Free & Secure</h3>
          <p className="text-gray-600">No sign-up, 100% privacy guaranteed.</p>
        </div>
        <div className="feature-card text-center p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Easy to Use</h3>
          <p className="text-gray-600">Just upload your ODT file and click convert!</p>
        </div>
      </section>

      {/* Call to Action Button */}
      <section>
        <button className="px-6 py-3 bg-green-600 text-white font-bold text-lg rounded-lg hover:bg-green-700 transition duration-300">
          Start Conversion
        </button>
      </section>
    </div>
  );
}

export default App;