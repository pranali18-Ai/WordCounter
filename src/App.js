import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggleMode = () => {
    // console.log(cls)
    // document.body.classList.add('bg-'+ cls )
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#041e45';
      showAlert("Dark mode enabled", "success");
      // document.title = 'Poshly - Blue Mode';
      //   setInterval(() => {
      //     document.title = 'Poshly-Dark Mode';
      //   }, 2000);
      //   setInterval(() => {
      //     document.title = 'Install Poshly now';
      //   }, 1500);
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';

      showAlert("Light Mode Enabled", "success");
      // document.title = 'Poshly - Light Mode';
    }
  };

  return (
    <>
      <Router>
      <Navbar title="Poshly" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-4">
        <Switch>
        <Route exact path="/">         
        <TextForm showAlert={showAlert} heading="Word Counter " mode={mode} />
        </Route>
        <Route exact path="/about">
        <About mode={mode} />
        </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
