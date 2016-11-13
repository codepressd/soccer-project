export default(state =[], action) =>{

	switch(action.type){
		
		case 'FETCH_DATA_SUCCESS':
			
			state = [...state];
			state = action.leagues;
			
			return state

		default:
			return state;

	}

}