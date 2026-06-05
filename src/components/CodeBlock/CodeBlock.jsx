import { useState } from "react";

export default function CodeBlock({ snippet }) {
  const [copyLabel, setCopyLabel] = useState("Copy");

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(snippet.code);
      setCopyLabel("Copied");
    } catch {
      setCopyLabel("Copy failed");
    }

    window.setTimeout(() => setCopyLabel("Copy"), 1600);
  }

  return (
    <section className="code-block" aria-labelledby={`snippet-${snippet.id}`}>
      <div className="code-block-header">
        <div>
          <p className="code-language">{snippet.language}</p>
          <h3 id={`snippet-${snippet.id}`}>{snippet.title}</h3>
          <p>{snippet.description}</p>
        </div>

        <button className="copy-button" type="button" onClick={handleCopy}>
          {copyLabel}
        </button>
      </div>

      <pre>
        <code className={`language-${snippet.language}`}>{snippet.code}</code>
      </pre>

      <p className="snippet-explanation">{snippet.explanation}</p>
    </section>
  );
}

