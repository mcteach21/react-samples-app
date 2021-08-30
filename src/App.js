import logo from './logo.svg';


import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch  } from "react-router-dom"

import SimpleMenu from './menu.js';

import TicToe from './tictoe.js';
import Memory from './memory.js';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="menu-right">
                <SimpleMenu />
            </div>
          </header>

          <div className="App-main container mt-2" style={{ marginTop: 40 }}>
                <div>
                  <Switch>
                    <Route exact path="/">

                    </Route>
                    <Route path="/about">
                      <h2>About </h2>
                    </Route>
                    <Route path="/tictoe">
                        <TicToe />
                    </Route>
                    <Route path="/memory">
                        <Memory />
                    </Route>
                  </Switch>
                </div>
          </div>

          <footer className="App-footer">
            <div className="footer-copyright text-center py-3">
              ©2021 Copyright <a href="https://github.com/mcteach21/react-samples-app">mc.tech21</a>
            </div>
          </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;