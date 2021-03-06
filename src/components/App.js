import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreator';
import Main from './Main';

function mapStateToProps(state){

	return {
		team: state.team,
		listOfLeagues: state.listOfLeagues,
		leagueTable: state.leagueTable,
		pathId: state.pathId,
		players: state.players
	}
}

function mapDispachToProps(dispatch){
	return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;