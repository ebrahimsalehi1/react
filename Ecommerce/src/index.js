import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/_index.scss';
import App from './App';
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'


const THEME = createMuiTheme({
  typography: {
    "fontFamily": 'Sahel',
    "fontSize": 15,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
  }
})

ReactDOM.render(
  <ThemeProvider theme={THEME}>
    <App/>
  </ThemeProvider>,
  document.getElementById('root')
);
