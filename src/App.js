import React from 'react';
import Mcard from './components/Card';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';



const theme = createMuiTheme({
  typography: {
      fontSize: 50, 
      fontFamily: 'Noto Serif',
  },
});


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
          <Typography>Tasks to do:</Typography>
      </ThemeProvider>
      <Divider light />
        <br></br>
      <Mcard />
    </div>
  );
}

export default App;
