import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import listOfLeagues from './leagueReducer';
import leagueTable from './leagueTableReducer';
import players from './playerReducer';
import team from './teamReducer';

const rootReducer = combineReducers({listOfLeagues, leagueTable, players, team, routing: routerReducer});

export default rootReducer;