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
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLoClick = () => {
    const newText = text.toLowerCase();
    addToHistory(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleOnChange = (event) => {
    const newText = event.target.value;
    addToHistory(newText);

  };

  const handleUndo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      props.showAlert("Undo", "success");
    }
  };

  const handleRedo = () => {
    if (historyIndex < textHistory.length - 1) {
      setHistoryIndex(historyIndex + 1);
      props.showAlert("Redo", "success");
    }
  };
  const handleclear = () => {
    setText(' ');
    setTextHistory([' ']);
    setHistoryIndex(0);
    props.showAlert("Cleared text", "success");
  };

  const handlecopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard", "success");
  };
  const handleExtraspaces = () => {
    let newText = text.split(/\s+/);
    setText(newText.join(" "));
    props.showAlert(" Removed the ExtraSpaces", "success");
  };
  return (
    <>
      <div style={{ backgroundColor: props.mode === 'dark' ? '#041e45' : 'white', color: props.mode === 'dark' ? 'white' : '#041e45' }}>
        <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#041e45' }}>
          <h1 className='mb-4  text-center'>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control border-5 "
              value={text}
              onChange={handleOnChange}
              style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#041e45' }}
              id="myBox"
              rows="8"
              placeholder="Enter the text here"
            ></textarea>
          </div>
          <button className="btn btn-dark mx-1 my-1" onClick={handleUpClick} id='mybutton'>
            &#8593; Uppercase
          </button>
          <button className="btn btn-dark mx-1 my-1" onClick={handleLoClick}>
            &#8595; Lowercase
          </button>     
            <button className="btn btn-dark mx-1 my-1" onClick={handleUndo} id='mybutton'>
              &#8617; Undo
            </button>
            <button className="btn btn-secondary mx-1 my-1" onClick={handleRedo} id='mybutton'>
              &#8618; Redo
            </button>

          <button className="btn btn-dark mx-1 my-1" onClick={handleclear} id='mybutton'>
            &#128465; Clear</button>
          <button className="btn btn-dark mx-1 my-1" onClick={handlecopy} id='mybutton'>
            &#128458; Copy</button>
          <button className="btn btn-dark mx-1 my-1" onClick={handleExtraspaces} id='mybutton'>
            &#x2717; Remove Extra Spaces</button>


        </div>

        <div className="container my-3">
          <h1>Your text summary</h1>
          <p>
            {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters
          </p>
          <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to Read</p>

          <h2>Preview</h2 >
          <p>{text.length > 0 ? text : "Enter Something to Preview here"}</p>
        </div>
      </div>
    </>
  );
}
