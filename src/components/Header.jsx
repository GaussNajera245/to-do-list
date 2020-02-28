import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const theme = createMuiTheme({
  typography: {
      fontSize: 50, 
      fontFamily: 'Noto Serif',
  },
});

function Header(props){
    return (
        <div className="header" style={{minWidth:'400px'}} >
            <ThemeProvider theme={theme}>
            <Typography>{props.title}</Typography>
            </ThemeProvider>
            <Divider light />
        </div>
    );
}


export default Header;