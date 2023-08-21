import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLoClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleOnChange = (event) => {
    //   console.log("On Change");
    setText(event.target.value);
  }


  const [text, setText] = useState('Enter text here');
  return (
    <>
      <div className="container">
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder='Enter the text here'></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>  {/*button.btn.btn-primary*/}
        <button className="btn btn-primary" onClick={handleLoClick}>Convert to Uppercase</button>  {/*button.btn.btn-primary*/}
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} and {text.length} characters </p>
        <p>{0.008 * text.split(" ").length} Minutes to Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  )
}
