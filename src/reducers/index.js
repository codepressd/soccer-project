import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import listOfLeagues from './leagueReducer';
import leagueTable from './leagueTableReducer';
import players from './playerReducer';
import team from './teamReducer';
import pathId from './pathIdReducer'

const rootReducer = combineReducers({listOfLeagues, leagueTable, players, team, pathId, routing: routerReducer});

export default rootReducer;