import logo from './logo.svg';
import './App.css';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div>
          <Button variant="outlined" color="primary" href="tictoe">Tic Toe</Button>
          <Button variant="outlined" color="secondary" href="memory">Memory</Button>
          <Button variant="outlined" color="primary" href="game">
            Link
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
          © 2021 Copyright <a href="https://github.com/mcteach21">mc.tech21</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
