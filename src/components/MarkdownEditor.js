import React, { useState, useEffect } from "react";

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("");
  const [preview, setPreview] = useState("");

  useEffect(() => {
    let html = markdown;

    // Headings
    html = html.replace(/^### (.*$)/gim, "<h3>$1</h3>");
    html = html.replace(/^## (.*$)/gim, "<h2>$1</h2>");
    html = html.replace(/^# (.*$)/gim, "<h1>$1</h1>");

    // Bold and italic
    html = html.replace(/\*\*(.*?)\*\*/gim, "<b>$1</b>");
    html = html.replace(/\*(.*?)\*/gim, "<i>$1</i>");

    // Links [text](url)
    html = html.replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>");

    // Line breaks
    html = html.replace(/\n/g, "<br />");

    setPreview(html);
  }, [markdown]);

  return (
    <div className="editor-container">
      <h1>Markdown Editor</h1>
      <textarea
        className="textarea"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Type markdown here..."
      />
      <div
        className="preview"
        dangerouslySetInnerHTML={{ __html: preview }}
      />
    </div>
  );
};

export default MarkdownEditor;
