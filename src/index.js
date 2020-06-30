import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {MuiThemeProvider,jssPreset} from '@material-ui/core/styles';
//import {theme} from "Utils/MaterialTheme/ThemeGenerator";
//import {theme} from "Utils/MaterialTheme/theme";
import {theme} from "Utils/MaterialTheme/theme2";

import {SnackbarProvider} from "notistack";
import JssProvider from 'react-jss/lib/JssProvider';
import {create} from 'jss';
import rtl from 'jss-rtl';
import {Provider} from 'react-redux';
import {INCLUDE_IRISA_THEME,PROJECT_TYPE} from './config';

const jss = create({plugins: [...jssPreset().plugins, rtl()]});

const IndexComponent = ()=>(
<React.Suspense fallback={<h1>Loading profile...</h1>}>
    {
        INCLUDE_IRISA_THEME && 
        <MuiThemeProvider theme={theme}>
        <JssProvider jss={jss}>
            <SnackbarProvider maxSnack={10}>
                <App type={PROJECT_TYPE}/>
            </SnackbarProvider>
        </JssProvider>
        </MuiThemeProvider>
    }
    {
        !INCLUDE_IRISA_THEME && 
        <App type={PROJECT_TYPE}/>
    }    
</React.Suspense>
)

ReactDOM.render(
    <IndexComponent />
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
