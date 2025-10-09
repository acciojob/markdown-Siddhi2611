import React, { useState, useEffect } from "react";

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("");
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  // Simple markdown to HTML converter (basic implementation)
  const convertMarkdownToHTML = (text) => {
    let html = text;

    // Bold (**text**)
    html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

    // Italic (*text*)
    html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");

    // Headings (#, ##, ###)
    html = html.replace(/^### (.*$)/gim, "<h3>$1</h3>");
    html = html.replace(/^## (.*$)/gim, "<h2>$1</h2>");
    html = html.replace(/^# (.*$)/gim, "<h1>$1</h1>");

    // Links [text](url)
    html = html.replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2' target='_blank'>$1</a>");

    // Line breaks
    html = html.replace(/\n/g, "<br>");

    return html.trim();
  };

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      const html = convertMarkdownToHTML(markdown);
      setPreview(html);
      setLoading(false);
    }, 300); // simulate small delay for typing

    return () => clearTimeout(timeout);
  }, [markdown]);

  return (
    <div className="editor-container">
      <div className="editor-section">
        <h2>Write Markdown</h2>
        <textarea
          className="textarea"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          placeholder="Type your markdown here..."
        />
      </div>

      <div className="preview-section">
        <h2>Preview</h2>
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div
            className="preview"
            dangerouslySetInnerHTML={{ __html: preview }}
          />
        )}
      </div>
    </div>
  );
};

export default MarkdownEditor;
