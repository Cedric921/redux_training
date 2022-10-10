import { createStore, combineReducers, applyMiddleware } from 'redux';
import addbookReducer from './reducers/booksReducer';
import think from 'redux-thunk';
import fetchedBooksReducer from './reducers/fetchBookaReducer';

const rootReducer = combineReducers({
	library: addbookReducer,
	search: fetchedBooksReducer,
});

const store = createStore(rootReducer, applyMiddleware(think));

export default store;
