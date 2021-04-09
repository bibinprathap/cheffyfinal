import { combineReducers } from 'redux';
import foodReducer from './foodReducer';
import { authReducer } from './authReducer';
import { chefReducer } from './chefReducer';
import { counterReducer } from './counterReducer';
import { cartReducer } from "./cartReducer";

const rootReducer = combineReducers({
	food: foodReducer,
	counter: counterReducer,
	auth: authReducer,
	chef: chefReducer,
	cart:cartReducer,
});

export default rootReducer;
