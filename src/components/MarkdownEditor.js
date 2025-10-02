import React, { useState, useEffect } from 'react'


// rendered HTML preview
const [html, setHtml] = useState('')
// loading boolean (class name required by test: loading)
const [loading, setLoading] = useState(false)


// update preview whenever text changes
useEffect(() => {
let isMounted = true
setLoading(true)


// simulate a small debounce for smoother updates (still runs within this response)
const id = setTimeout(() => {
if (!isMounted) return
const rendered = convertMarkdownToHTML(text)
setHtml(rendered)
setLoading(false)
}, 150)


return () => {
isMounted = false
clearTimeout(id)
}
}, [text])


// two-way binding: clicking on preview will copy text back to textarea (example of two-way interaction)
const handlePreviewClick = () => {
// Append a newline + a comment to show interaction; in real app you might implement edit-in-preview
setText((t) => t + '\n\n<!-- edited from preview -->')
}


return (
<div className="markdown-editor">
<section className="pane input-pane">
<h2>Editor</h2>
<textarea
className="textarea"
value={text}
onChange={(e) => setText(e.target.value)}
aria-label="Markdown input"
/>
</section>


<section className="pane preview-pane">
<h2>Preview</h2>


{/* loading indicator (class name 'loading' must be present when loading) */}
{loading && <div className="loading">Rendering preview...</div>}


<div
className="preview"
onClick={handlePreviewClick}
// eslint-disable-next-line react/no-danger
dangerouslySetInnerHTML={{ __html: html }}
/>
</section>
</div>
)
}
