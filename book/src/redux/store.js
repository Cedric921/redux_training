import { createStore, combineReducers } from 'redux';
import addbookReducer from './reducers/addBooksReducer';

const rootReducer = combineReducers({
	library: addbookReducer,
});

const store = createStore(rootReducer);

export default store;
