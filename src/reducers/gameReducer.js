export default(state =[], action) =>{

	switch(action.type){
		
		case 'DATA_SUCCESS':
			console.log('action',action.leagues);
			return [
				...state, console.log(state)
				
			];

		default:
			return state;

	}

}