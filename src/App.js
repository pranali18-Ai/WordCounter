import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';



function App() {
  const [mode, setmode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'grey';
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'light';
    }
  }
  return (
    <>

      <Navbar title="Poshly" about="About" mode={mode} toggleMode={toggleMode} />

      <div className="container my-3">
        <TextForm heading="Enter the text to Analyze" mode={mode} />
        {/* <About /> */}
      </div>


    </>

  );
}

export default App;
