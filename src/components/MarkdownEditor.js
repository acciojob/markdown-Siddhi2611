import React, { useState, useEffect } from "react";
import { marked } from "marked";

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("");
  const [preview, setPreview] = useState("");

  // Update preview whenever markdown changes
  useEffect(() => {
    setPreview(marked(markdown));
  }, [markdown]);

  return (
    <div className="app">
      <div className="textarea">
        <textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          placeholder="Type Markdown here..."
        />
      </div>
      <div
        className="preview"
        dangerouslySetInnerHTML={{ __html: preview }}
      />
    </div>
  );
};

export default MarkdownEditor;

