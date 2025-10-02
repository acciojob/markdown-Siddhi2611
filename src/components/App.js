import React from 'react'
import MarkdownEditor from './MarkdownEditor'
import './styles.css'


export default function App() {
return (
<div className="app">
<header className="app-header">
<h1>React Markdown Editor</h1>
</header>


<main className="editor-container">
<MarkdownEditor />
</main>


<footer className="app-footer">Simple live Markdown editor — uses useState + useEffect</footer>
</div>
)
}
