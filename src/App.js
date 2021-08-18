import logo from './logo.svg';
import './App.css';

import { Button } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div>
          <Button color="primary">Tic Toe</Button>
          <Button color="primary">Memory</Button>
        </div>
      </header>

      <div className="App-main">
         
          Lorem ipsum dolor


      </div>

      <footer className="App-footer">
        <div class="footer-copyright text-center py-3">
          © 2021 Copyright <a href="https://github.com/mcteach21">mc.tech21</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
