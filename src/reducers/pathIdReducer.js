
export default(state = [], action) =>{
	
	switch(action.type){
		
		case 'SET_PATH_ID':
			
			state = [...state];
			state = action.pathId;

			return state;
				
			

		default:
			return state;

	}

}