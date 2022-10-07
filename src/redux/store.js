import { createStore, combineReducers, applyMiddleware } from 'redux';
import phoneReducer from './phone/reducerPhone';
import commentsReducer from './comments/reducerComment';
import tvReducer from './tv/reducerTv';

const rootReducers = combineReducers({
	tv: tvReducer,
	phones: phoneReducer,
	comments: commentsReducer,
});

const store = createStore(rootReducers, applyMiddleware());

export default store;
