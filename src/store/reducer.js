const initialState = {
	counter: 0,
	results: []
}

const reducer = ( state = initialState, action ) => {
	switch( action.type ){
		case 'INCREMENT':
			return {
				...state,
				counter: state.counter + 1
			}
		case 'DECREMENT':
			return {
				...state,
				counter: state.counter - 1
			}
		case 'ADD':
			return {
				...state,
				counter: state.counter + action.payload.value
			}
		case 'SUBTRACT':
			return {
				...state,
				counter: state.counter - action.payload.value
			}
		case 'SHOW_RESULT':
			return {
				...state,
				results: state.results.concat({id: new Date(), value: state.counter})
			}
		case 'DELETE_RESULT':
			const updateArray = state.results.filter(result => result.id !== action.resultElId);
			return {
				...state,
				results: updateArray
			}
			default:
	}
	return state;
};

export default reducer;