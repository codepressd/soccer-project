import {reduxReactFirebase, firebaseStateReducer} from 'react-redux-firebase';

//Import Root reducer
import listOfLeagues from '../reducers/leagueReducer';
import leagueTable from '../reducers/leagueTableReducer';
import players from '../reducers/playerReducer';
import team from '../reducers/teamReducer';

//Initial state

// var listOfLeagues =[];
// var leagueTable = {
// 	standing:[]
// };
// var team = {
// 	teams:[]
// };
// var players = {
// 	players: []
// };



// //default state

// const defaultState= {
	
// 	listOfLeagues,
// 	leagueTable,
// 	team,
// 	players
// }

//My own reducer

const fireRootReducer = combineReducers({
	firebase: firebaseStateReducer, 
	listOfLeagues,
	leagueTable,
	players,
	team,
	routing: routerReducer
});


//Hacked store create my own thunk works

const createStoreWithFirebase = compose(reduxReactFirebase(fireConfig), )(createStore);

const store = createStoreWithFirebase(fireRootReducer, composeEnhancers(applyMiddleware(thunk)));

//original store create
//const store = createStore(rootReducer,  defaultState, composeEnhancers(applyMiddleware(thunk)));
