import { combineReducers } from 'redux';

import count from './reducer/count';
import result from './reducer/result';

const rootReducer = combineReducers({
	count,
	result
});

export default rootReducer;