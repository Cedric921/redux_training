import { createStore, combineReducers } from 'redux';
import phoneReducer from './phone/reducerPhone';
import tvReducer from './tv/reducerTv';

const rootReducers = combineReducers({ tv: tvReducer, phones: phoneReducer });

const store = createStore(rootReducers);

export default store;
