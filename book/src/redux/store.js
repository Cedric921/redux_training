import { createStore, combineReducers } from 'redux';
import addbookReducer from './reducers/booksReducer';

const rootReducer = combineReducers({
	library: addbookReducer,
});

const store = createStore(rootReducer);

export default store;
