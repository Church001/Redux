//using require key word because this file will be launched using node
const redux = require('redux');
const createStore = redux.createStore; //createStore enables users create a redux store


//since reducers require a state as one of the arguments, i have to declare an initial state

const initialState = {
	counter: 0
}

//==============================================================================================================
//Reducer
		//the only thing that relates to the store in terms of sending data into the store
		//hence, the need to cinitialize the store using a reducer
		//this is also why a reducer has to be creater first before a store

		const rootReducer = (state = initialState, action) => {
			if(action.type === 'INC_COUNTER'){
				return {
					...state,
					counter: state.counter + 1
				}
			}
			if(action.type === 'ADD_COUNTER'){
				return {
					...state,
					counter: state.counter + action.value
				}
			}
			return state;
		}// reducer is just a function that recieves an action and returns a state


//==============================================================================================================
//Store
	const store = createStore(rootReducer); 
	console.log(store.getState());


//==============================================================================================================
//Subscription
	//subscription helps eliminate the need to manually get state using the getState method
	// it automatically provides the state once something changes
	//sibscription is setup right after the store was created
	//subscription takes in a function as an argument, and that function doesn't take any argument in itself
	store.subscribe(() => {
		console.log('[Subscription]', store.getState());
	});

//==============================================================================================================
//Dispatching Action
	//a store hase the ability to dispatch an action using its dispatch function
		store.dispatch({type: 'INC_COUNTER'}); //dispatch receives a JS object that has 'type'
		store.dispatch({type: 'ADD_COUNTER', value: 10});

		console.log(store.getState())
