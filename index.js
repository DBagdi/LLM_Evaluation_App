import { useState } from "react";
import DatasetUpload from "../components/DatasetUpload";
import PromptInput from "../components/PromptInput";
import ResultsView from "../components/ResultsView";
import { evaluateLLMs } from "../utils/api";
const cors = require('cors');

app.use(cors({ origin: 'http://localhost:3000' }));

export default function Home() {
  const [dataset, setDataset] = useState(null);
  const [prompt, setPrompt] = useState("");
  const [results, setResults] = useState([]);

  const handleEvaluation = async () => {
    if (!dataset || !prompt) return alert("Upload dataset & enter prompt");

    const response = await evaluateLLMs(dataset.id, prompt);
    setResults(response);
  };

  return (
    <div className="container">
      <h1>LLM Evaluation Platform</h1>
      <DatasetUpload setDataset={setDataset} />
      <PromptInput setPrompt={setPrompt} dataset={dataset} />
      <button onClick={handleEvaluation} disabled={!dataset || !prompt}>
        Evaluate
      </button>
      <ResultsView results={results} />
    </div>
  );
}
