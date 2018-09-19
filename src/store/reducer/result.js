import * as actionTypes from '../actions';

const initialState = {
	results: []
}

const reducer = ( state = initialState, action ) => {
	switch( action.type ){
		case actionTypes.SHOW_RESULT:
			return {
				...state,
				results: state.results.concat({id: new Date(), value: state.counter})
			}
		case actionTypes.DELETE_RESULT:
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