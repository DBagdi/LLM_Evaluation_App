import axios from "axios";

const BACKEND_URL = "http://localhost:5000";

export const uploadDataset = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await axios.post(`${BACKEND_URL}/upload`, formData);
  return response.data;
};

export const evaluateLLMs = async (datasetId, prompt) => {
  const response = await axios.post(`${BACKEND_URL}/evaluate`, { datasetId, prompt });
  return response.data;
};