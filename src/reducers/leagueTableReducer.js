export default(state =[], action) =>{

	switch(action.type){
		
		case 'FETCH_LEAGUE_TABLE_SUCCESS':
			state = [...state];
			state = action.tables;

			return state;

		default:
			return state;

	}

}