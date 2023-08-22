import React, { useState, useEffect } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('Enter text here');
  const [textHistory, setTextHistory] = useState([text]);
  const [historyIndex, setHistoryIndex] = useState(0);

  const addToHistory = (newText) => {
    const newHistory = textHistory.slice(0, historyIndex + 1);
    newHistory.push(newText);
    setTextHistory(newHistory);
    setHistoryIndex(historyIndex + 1);
  };

  useEffect(() => {
    setText(textHistory[historyIndex]);
  }, [historyIndex, textHistory]);

  const handleUpClick = () => {
    const newText = text.toUpperCase();
    addToHistory(newText);
  };

  const handleLoClick = () => {
    const newText = text.toLowerCase();
    addToHistory(newText);
  };

  const handleOnChange = (event) => {
    const newText = event.target.value;
    addToHistory(newText);
  };

  const handleUndo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
    }
  };

  const handleRedo = () => {
    if (historyIndex < textHistory.length - 1) {
      setHistoryIndex(historyIndex + 1);
    }
  };
  const handleclear = () => {
    setText(' ');
    setTextHistory([' ']);
    setHistoryIndex(0);
  };

  const handlecopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handleExtraspaces = () => {
    let newText = text.split(/\s+/);
    setText(newText.join(" "));
  };
  return (
    <>
      <div style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
        <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control border-4 "
              value={text}
              onChange={handleOnChange}
              style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
              id="myBox"
              rows="8"
              placeholder="Enter the text here"
            ></textarea>
          </div>
          <button className="btn btn-dark mx-1" onClick={handleUpClick}>
            &#8593; Uppercase
          </button>
          <button className="btn btn-dark mx-1" onClick={handleLoClick}>
            &#8595; Lowercase
          </button>

          <div class="btn-group" role="group" aria-label="Basic mixed styles example">
            <button className="btn btn-dark" onClick={handleUndo}>
              &#8617; Undo
            </button>
            <button className="btn btn-secondary" onClick={handleRedo}>
              &#8618; Redo
            </button>
          </div>

          <button className="btn btn-dark mx-1" onClick={handleclear}>
            &#128465; Clear</button>
          <button className="btn btn-dark mx-1" onClick={handlecopy}>
            &#128458; Copy</button>
          <button className="btn btn-dark mx-1" onClick={handleExtraspaces}>
            &#x2717; Remove Extra Spaces</button>


        </div>

        <div className="container my-3">
          <h1>Your text summary</h1>
          <p>
            {text.split(' ').length} words and {text.length} characters
          </p>
          <p>{0.008 * text.split(' ').length} Minutes to Read</p>
          <h2>Preview</h2 >

          <p>{text.length > 0 ? text : "Enter Something to Preview here"}</p>
        </div>
      </div>
    </>
  );
}
