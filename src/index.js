import React from 'react';
import { render } from 'react-dom';

import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store/store';


//Import css

import './css/style.css';



//Import Components

import App from './components/App';
import LeagueView from './components/LeaguesView';
import LeagueTableView from './components/LeagueTableView';
import TeamsView from './components/TeamsView';
import CompView from './components/CompView';
import Team from './components/Team';
//import NotFound from './components/NotFound';



const Root = () => {
	return(
	<Provider store={store}>	
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={LeagueView}></IndexRoute>
				<Route path="/comps/:compId/league-table" component={LeagueTableView}></Route>
				<Route path="/comps/:compId/teams" component={TeamsView}></Route>
				<Route path="comps/:compId" component={CompView}></Route>
				<Route path="/Team/:teamId" component={Team}></Route>
				
			</Route>
		</Router>
	</Provider>
	)
}

render(<Root />, document.querySelector('#main'));