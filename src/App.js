import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';



function App() {
  const [mode, setmode] = useState('dark');
  return (
    <>

      <Navbar title="Poshly" about="About" mode={mode} />

      <div className="container my-3">
        <TextForm heading="Enter the text to Analyze" />
        {/* <About /> */}
      </div>


    </>

  );
}

export default App;
