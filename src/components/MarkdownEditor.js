import React, { useState, useEffect } from "react";

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("");
  const [preview, setPreview] = useState("");

  // Update preview whenever markdown changes
  useEffect(() => {
    setPreview(markdown); // no parser, just mirror the text
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
      <div className="preview">{preview}</div>
    </div>
  );
};

export default MarkdownEditor;
