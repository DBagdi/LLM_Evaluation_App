export default function ResultsView({ results }) {
    return (
      <div>
        <h3>Evaluation Results</h3>
        {results.length === 0 ? <p>No results yet</p> : (
          <table border="1">
            <thead>
              <tr>
                <th>Prompt</th>
                <th>LLM</th>
                <th>Response</th>
                <th>Correctness</th>
                <th>Faithfulness</th>
              </tr>
            </thead>
            <tbody>
              {results.map((r, i) => (
                <tr key={i}>
                  <td>{r.prompt}</td>
                  <td>{r.model}</td>
                  <td>{r.response}</td>
                  <td>{r.correctness}</td>
                  <td>{r.faithfulness}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
  