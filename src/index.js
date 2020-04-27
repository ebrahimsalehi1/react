import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {MuiThemeProvider,jssPreset} from '@material-ui/core/styles';
//import {theme} from "Utils/MaterialTheme/ThemeGenerator";
import {theme} from "Utils/MaterialTheme/theme";
import {SnackbarProvider} from "notistack";
import JssProvider from 'react-jss/lib/JssProvider';
import {create} from 'jss';
import rtl from 'jss-rtl';
//import {Provider} from 'react-redux';

const jss = create({plugins: [...jssPreset().plugins, rtl()]});

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <JssProvider jss={jss}>
            <SnackbarProvider maxSnack={10}>
                <App/>
            </SnackbarProvider>
        </JssProvider>
    </MuiThemeProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
