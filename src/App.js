import { useState } from 'react';
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
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#041e45';

      showAlert("Dark mode enabled", "success");
      document.title = 'Poshly - Blue Mode';
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
      document.title = 'Poshly - Light Mode';
    }
  }
  return (
    <>

      <Navbar title="Poshly" about="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Router>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <TextForm showAlert={showAlert} heading="Enter the text to Analyze" mode={mode} />
            </Route>
          </Switch>
          <TextForm showAlert={showAlert} heading="Enter the text to Analyze" mode={mode} />
          <About />
        </Router>
      </div>

    </>

  );
}

export default App;
