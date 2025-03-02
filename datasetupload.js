import { useState } from "react";
import { uploadDataset } from "../utils/api";

export default function DatasetUpload({ setDataset }) {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return alert("Please select a CSV file");

    const response = await uploadDataset(file);
    setDataset(response);
  };

  return (
    <div>
      <h3>Upload Dataset</h3>
      <input type="file" accept=".csv" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}
