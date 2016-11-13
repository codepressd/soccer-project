import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

import store from '../store/store';
import  App  from '../components/App';
import Main from '../components/Main';
import CompList from '../components/CompList';
import CompView from '../components/CompView';
import InfoContain from '../components/InfoContain';
import LeagueList from '../components/LeagueList';
import LeaguesView from '../components/LeaguesView';
//import LeagueTable from '../components/leagueTableDetail ';
import LeagueTableView from '../components/LeagueTableView';
import TableView from '../components/TableView';
import Team from '../components/Team';
import Player from '../components/Player';
import TeamsView from '../components/TeamsView';
import TeamTable from '../components/TeamTable';


describe('Testing components', () => {


	it('App Should Render ', () => {
		shallow(<Provider store={store}><App /></Provider>);
		
      	});		   

	it('Main Should Render ', () => {
		
		shallow(<Provider store={store}><Main /></Provider>);
      	});

	it('CompList Should Render ', () => {
		
		shallow(<Provider store={store}><CompList /></Provider>);
      	});

	it('CompView Should Render ', () => {
		
		shallow(<Provider store={store}><CompView /></Provider>);
      	});

	it('InfoContain Should Render ', () => {
		
		shallow(<Provider store={store}><InfoContain /></Provider>);
      	});

	it('LeagueList Should Render ', () => {
		
		shallow(<Provider store={store}><LeagueList /></Provider>);
      	});

	it('LeaguesView Should Render ', () => {
		 shallow(<Provider store={store}><LeaguesView /></Provider>);
		
      	});

	/*it('LeagueTableDetail Should Render ', () => {
		
		shallow(<Provider store={store}><LeagueTableDetail /></Provider>);
      	});*/

	it('LeagueTableView Should Render ', () => {
		
		shallow(<Provider store={store}><LeagueTableView /></Provider>);
      	});

	it('TableView Should Render ', () => {
		
		shallow(<Provider store={store}><TableView /></Provider>);
      	});

	it('Team Should Render ', () => {
		
		shallow(<Provider store={store}><Team /></Provider>);
      	});

	it('Player Should Render ', () => {
		
		shallow(<Provider store={store}><Player /></Provider>);
      	});

	it('TeamsView Should Render ', () => {
		
		shallow(<Provider store={store}><TeamsView /></Provider>);
      	});

	it('TeamTable Should Render ', () => {
		
		shallow(<Provider store={store}><TeamTable /></Provider>);
      	});



});