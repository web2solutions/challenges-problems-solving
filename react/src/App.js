import logo from './logo.svg';
import './App.css'


import Hello from './components/Hello.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello msg="Eduardo"></Hello>
      </header>
    </div>
  );
}

export default App;
