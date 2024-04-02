import React, { useState } from 'react';

const FileAttachment = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(event.target.files?.[0] || null);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedFile) {
      alert(`Selected File: ${selectedFile.name}`);
    } else {
      alert('No file selected');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit}>
        <label>
          Select File:
          <input type="file" onChange={handleFileChange} />
        </label>
        <button className="bg-blue-600 text-white p-2 cursor-pointer" type="submit">Upload</button>
      </form>
    </div>
  );
};

export default FileAttachment;
