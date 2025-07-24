import React, { useState, useEffect } from "react";
import { marked } from "marked";
import "./App.css";

const defaultMarkdown = `# Başlık (H1)
## Alt Başlık (H2)

[Link](https://www.freecodecamp.org)

\`Inline code\`

\`\`\`
Kod bloğu
function test() {
  console.log("hello world");
}
\`\`\`

- Liste elemanı 1
- Liste elemanı 2

> Alıntı bloğu

![Resim](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

**Kalın yazı**
`;

function App() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="App">
      <h1 className="header">Markdown Previewer</h1>
      <div className="editor-preview">
        <textarea
          id="editor"
          value={markdown}
          onChange={handleChange}
        ></textarea>
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked(markdown, { breaks: true }) }}
        ></div>
      </div>
    </div>
  );
}

export default App;
