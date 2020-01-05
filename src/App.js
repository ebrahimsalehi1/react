import React, {lazy, Suspense,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Router, Route} from "react-router-dom";
import MenuAppBar from "./Components/AppBar"
import {createBrowserHistory} from 'history';
import {LoginProvider} from "./Utils/StateManagement";
//import App1 from './irisacomponents/src/AppMain'
//import App1 from './Components/IrisaComponents/TextField/FormTextField'
//import App1 from './Components/IrisaComponents/Outcome/FormOutcome'
//import App1 from './Components/IrisaComponents/Button/FormButton'
//import {Grid,Card} from '@material-ui/core';
import UsersGroupsApprolesSearch from './Components/IrisaComponents/UsersGroupsApprolesSearch';
import ReactVirtualizedTable from './Components/IrisaComponents/ReactVirtualizedTable'

const history = createBrowserHistory();
const Index = lazy(() => import('./Components/Index'));
const Users = lazy(() => import('./Components/Users'));
const Home = lazy(() => import('./Components/Home'));
    
/**
 * Main File
 * @returns {*}
 * @constructor
 */
function App() {

    /**
     * initial first states for authentication
     * @type {{authenticated: boolean}}
     */
    const initialAuthState = {
        authenticated: false
    };

    const [isOpen,setIsOpen] = useState(false);

                
    const TestComp =()=> (                                   
        <div>
            <button onClick={e=>{setIsOpen(true)}}>Open Dialog</button>
            <UsersGroupsApprolesSearch open={isOpen}
            selectSpecial="users"
            data={[
                  {"ID":"100","firstName":"LAB_Lubricant_PRJ.Reception","lastName":"z.rahimi, b.ghazi","email":"desc 1"},
                  {"ID":"101","firstName":"LAB_Lubricant_PRJ.Reception","lastName":"z.rahimi, b.ghazi","email":"desc 1"},
              ]}/>

              <ReactVirtualizedTable />
        </div> 
    );

    /**
     * create Reducer for authentication context
     * @param state
     * @param action
     * @returns {*}
     * @constructor
     */
    const AuthenticationReducer = (state, action) => {
        switch (action.type) {
            case 'changeAuthenticate':
                return {
                    ...state,
                    authenticated: action.authenticated
                };

            default:
                return state;
        }
    };

    return (
        // <div className="App">
            <LoginProvider
                initialState={initialAuthState}
                reducer={AuthenticationReducer}>
                <Router history={history}>
                    <MenuAppBar history={history}/>
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <p>
                            Edit <code>src/App.js</code> and save to reload.
                        </p>
                        <div>
                            <Suspense fallback={<div>Loading...</div>}>
                                <Route path="/" exact component={Index}/>
                                <Route path="/about/" component={Home}/>
                                <Route path="/testcomp/" component={                                    
                                    TestComp 
                                }/>
                                <Route path="/users/" component={Users}/>
                            </Suspense>
                        </div>
                    </header>
                </Router>
            </LoginProvider>
        // </div>
    );
}

export default App;
