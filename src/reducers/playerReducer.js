export default(state =[], action) =>{

	switch(action.type){
		
		case 'FETCH_PLAYERS_SUCCESS':
			
			state = [...state];
			state = action.players;

			return state;

		default:
			return state;

	}

}