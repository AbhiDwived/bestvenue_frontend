// ImageUploader.jsx
import React, { useEffect, useState } from 'react';

const ImageUploader = () => {
  const [files, setFiles] = useState([]);
  const [gallery, setGallery] = useState([]);

  const loadImages = async () => {
    const res = await fetch('http://localhost:3000/images');
    const data = await res.json();
    setGallery(data);
  };

  useEffect(() => {
    loadImages();
  }, []);

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    for (let file of files) {
      formData.append('photos', file);
    }

    await fetch('http://localhost:3000/upload', {
      method: 'POST',
      body: formData,
    });

    setFiles([]);
    loadImages();
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Add photos</h2>

      <div className="border-2 border-dashed border-gray-300 p-6 rounded mb-6 flex flex-col items-center justify-center">
        <input type="file" multiple onChange={handleFileChange} accept="image/*" />
        <button
          onClick={handleUpload}
          className="mt-4 px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Add images
        </button>
        <p className="text-sm text-gray-500 mt-2">GIF, JPG or PNG format, Max size 20 MB</p>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
        {gallery.map((file, index) => (
          <div
            key={index}
            className="border p-2 rounded shadow-sm relative bg-white"
          >
            <img
              src={`http://localhost:3000/uploads/${file}`}
              alt="Uploaded"
              className="w-full h-48 object-cover rounded"
            />
            <div className="mt-2">
              <p className="text-sm font-semibold">TITLE:</p>
              <p className="text-gray-700">Banquet hall</p>
              <select className="mt-2 w-full border rounded px-2 py-1">
                <option>Main photo</option>
                <option>Show as</option>
              </select>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => alert('Saving not implemented yet')}
        className="mt-6 px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Save
      </button>
    </div>
  );
};

export default ImageUploader;
