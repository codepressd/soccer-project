export default(state =[], action) =>{
	switch(action.type){
		case 'FETCH_TEAM_SUCCESS':
			state = [...state];
			state = action.teams;
			return state;

		default:
			return state;

	}

}