import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
//Import actions

import * as soccerActions from '../actions/actionCreator';


//Import Root reducer

import rootReducer from '../reducers/index';


var listOfLeagues =[];
var leagueTable = {
	standing:[]
};
var team = {
	teams:[]
};
var players = {
	players: []
};



//default state

const defaultState= {
	
	listOfLeagues,
	leagueTable,
	team,
	players
}

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,  defaultState, composeEnhancers(applyMiddleware(thunk)));

export const history = syncHistoryWithStore(browserHistory, store);

 export default store;
