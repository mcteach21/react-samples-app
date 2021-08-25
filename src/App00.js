import logo from './logo.svg';
import './App.css';

import React from 'react';
import { NavLink, withRouter } from 'react-router-dom'

import MainMenu from './menu.js';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { BrowserRouter as Router, Route, Switch  } from "react-router-dom"
import { Link } from 'react-router-dom'

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';

function App() {

  return (
    <div className="App">
      <Router>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />

            <AccountCircleIcon />            

            <div className="menu-right">
              <Button aria-controls="simple-menu" aria-haspopup="true" 
                   variant="contained" color="secondary">
                Games
              </Button>

              <MainMenu />  
              
              <Button variant="contained" color="primary">
                About
              </Button>
            </div>
          </header>

          <div className="App-main">
            <Switch>
              <Route
                path="/"
                exact
                render={() => 
                <h2>TicToe!</h2>}
              />

              <Route
                path="/about"
                exact
                render={() => 
                <h2>about</h2>}
              />

              <Route
                path="/profile"
                exact
                render={() => 
                <h2>profil</h2>}
              />
              
            </Switch>
             
          </div>

          <footer className="App-footer">
            <div className="footer-copyright text-center py-3">
              ©2021 Copyright <a href="https://github.com/mcteach21/react-samples-app">mc.tech21</a>
            </div>
          </footer>

      </Router>
    </div>
  );
}

export default App;
