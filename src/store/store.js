import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';

import {reduxReactFirebase, getFirebase} from 'react-redux-firebase';

//Import actions
import * as soccerActions from '../actions/actionCreator';

//import root reducer
import rootReducer from '../reducers/index';

//default state
import defaultState from './defaultState';


 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
	applyMiddleware(thunk),
	autoRehydrate()
	);

let store = createStore(rootReducer,  defaultState, enhancer);
 
export const history = syncHistoryWithStore(browserHistory, store);

 export default store;
