import Axios from 'axios';


// export const setPathId =(pathId) =>{
	
// 	return{
// 		type:'SET_PATH_ID',
// 		pathId
// 	}
// }

//get League Data
export const fetchDataSuccess = (leagues) => {

	return{
		type: 'FETCH_DATA_SUCCESS',
		leagues
	}

};

export const fetchDataError = (error) => {
	return{
		type:'FETCH_DATA_ERROR',
		error
	}
}

export const getLeagueData = (apiUrl) => {
	return (dispatch) => {

		return Axios.get(apiUrl, {headers: {'X-Auth-Token': '6620bdec3539427c85f61b4b788e5206'}})
			.then(response => {
				dispatch(fetchDataSuccess(response.data));
			})
			.catch(error => {
				dispatch(fetchDataError(error));
				throw(error);
			})
	}
}

//get Teams Data
export const fetchTeamSuccess = (teams) => {

	return{
		type: 'FETCH_TEAM_SUCCESS',
		teams
	}

};

export const fetchTeamError = (error) => {
	return{
		type:'FETCH_TEAM_ERROR',
		error
	}
}

export const getTeamData = (apiUrl) => {
	return (dispatch) => {

		return Axios.get(apiUrl, {headers: {'X-Auth-Token': '6620bdec3539427c85f61b4b788e5206'}})
			.then(response => {
				dispatch(fetchTeamSuccess(response.data));
			})
			.catch(error => {
				dispatch(fetchTeamError(error));
				throw(error);
			})
	}
}

//get Team Player Data
export const fetchTeamPlayersSuccess = (players) => {

	return{
		type: 'FETCH_PLAYERS_SUCCESS',
		players
	}

};

export const fetchTeamPlayersError = (error) => {
	return{
		type:'FETCH_PLAYERS_ERROR',
		error
	}
}

export const getTeamPlayersData = (apiUrl) => {
	return (dispatch) => {

		return Axios.get(apiUrl, {headers: {'X-Auth-Token': '6620bdec3539427c85f61b4b788e5206'}})
			.then(response => {
				dispatch(fetchTeamPlayersSuccess(response.data));
			})
			.catch(error => {
				dispatch(fetchTeamPlayersError(error));
				throw(error);
			})
	}
}

//get League Table Data
export const fetchLeagueTableSuccess = (tables) => {

	return{
		type: 'FETCH_LEAGUE_TABLE_SUCCESS',
		tables
	}

};

export const fetchLeagueTableError = (error) => {
	return{
		type:'FETCH_LEAGUE_TABLE_ERROR',
		error
	}
}

export const getLeagueTableData = (apiUrl) => {
	return (dispatch) => {

		return Axios.get(apiUrl, {headers: {'X-Auth-Token': '6620bdec3539427c85f61b4b788e5206'}})
			.then(response => {
				dispatch(fetchLeagueTableSuccess(response.data));
			})
			.catch(error => {
				dispatch(fetchLeagueTableError(error));
				throw(error);
			})
	}
}

