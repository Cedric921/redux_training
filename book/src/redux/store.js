import { createStore } from 'redux';
import addbookReducer from './reducers/addBooksReducer';

const rootReducer = {
	library: addbookReducer,
};

const store = createStore(rootReducer);

export default store;
