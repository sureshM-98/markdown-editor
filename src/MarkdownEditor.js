import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const MarkdownEditor = () => {
  const [markdownInput, setMarkdownInput] = useState("");

  const handleMarkdownChange = e => {
    setMarkdownInput(e.target.value);
  };

  return (
    <div className="App">
      {renderEditorSection("MARKDOWN", markdownInput, handleMarkdownChange)}
      {renderPreviewSection(markdownInput)}
    </div>
  );
};

const MarkComponent = ({ value, language }) => (
  <SyntaxHighlighter language={language || null} style={docco}>
    {value || ""}
  </SyntaxHighlighter>
);

const renderEditorSection = (title, value, onChange) => (
  <div className="wrapper" key={`${title}-section`}>
    <div className="head">
      <VisibilityIcon />
      {title}
    </div>
    <textarea autoFocus className="textarea" value={value} onChange={onChange} />
  </div>
);

const renderPreviewSection = markdownInput => (
  <div className="wrapper" key="preview-section">
    <div className="head">
      <VisibilityIcon />
      PREVIEW
    </div>
    <ReactMarkdown components={{ code: MarkComponent }}>{markdownInput}</ReactMarkdown>
  </div>
);

export default MarkdownEditor;
