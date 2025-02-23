import React from "react";

const FileUpload = ({ setCoordinates }) => {
  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target.result;
        const rows = text.split("\n").map((row) => row.trim()).filter(Boolean);
        
        const data = rows.slice(1).map((row) => {
          const [timestamp, lat, lng] = row.split(",");
          return { timestamp, lat: parseFloat(lat), lng: parseFloat(lng) };
        });

        setCoordinates(data);
      };
      reader.readAsText(file);
    }
  };

  return <input type="file" accept=".csv" onChange={handleUpload} />;
};

export default FileUpload;
