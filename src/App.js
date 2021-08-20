import logo from './logo.svg';
import './App.css';

import React from 'react';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function App() {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick= (event) => {
    alert(event.currentTarget.name);
    setAnchorEl(null);
  }

  const handleClic= (event) => {
    alert(this);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div className="menu-right">
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} variant="contained" color="secondary">
            Games
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClick}
          >
            <MenuItem onClick={handleMenuClick}>TicToe</MenuItem>
            <MenuItem onClick={handleMenuClick}>Memory</MenuItem>

            <MenuItem 
                onClick={ () => handleClic() }> Menu X 
             </MenuItem>
          </Menu>
          <Button variant="contained" color="primary" onClick={handleMenuClick}>
            About
          </Button>
        </div>
      </header>

      <div className="App-main">
         
         <Grid container spacing={1}>
            <Grid item xs={12} sm={4}>
              <Box bgcolor="primary.main" color="primary.contrastText" p={2}>
                primary.main
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box bgcolor="secondary.main" color="secondary.contrastText" p={2}>
                secondary.main
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box bgcolor="error.main" color="error.contrastText" p={2}>
                error.main
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box bgcolor="warning.main" color="warning.contrastText" p={2}>
                warning.main
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box bgcolor="info.main" color="info.contrastText" p={2}>
                info.main
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box bgcolor="success.main" color="success.contrastText" p={2}>
                success.main
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box bgcolor="text.primary" color="background.paper" p={2}>
                text.primary
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box bgcolor="text.secondary" color="background.paper" p={2}>
                text.secondary
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box bgcolor="text.disabled" color="background.paper" p={2}>
                text.disabled
              </Box>
            </Grid>
          </Grid>


      </div>

      <footer className="App-footer">
        <div className="footer-copyright text-center py-3">
          ©2021 Copyright <a href="https://github.com/mcteach21/react-samples-app">mc.tech21</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
