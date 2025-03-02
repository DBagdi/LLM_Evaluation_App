import { useState } from "react";

export default function PromptInput({ setPrompt, dataset }) {
  const [input, setInput] = useState("");

  return (
    <div>
      <h3>Enter Prompt</h3>
      <textarea
        placeholder="Write prompt here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setPrompt(input)}>Set Prompt</button>
    </div>
  );
}