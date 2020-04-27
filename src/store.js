import redu from './reducers/index';
import {createBrowserHistory} from 'history';
import { createStore } from 'redux';
export default createStore(redu);

export const History=createBrowserHistory();