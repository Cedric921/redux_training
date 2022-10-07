import { createStore, combineReducers, applyMiddleware } from 'redux';
import phoneReducer from './phone/reducerPhone';
import commentsReducer from './comments/reducerComment';
import tvReducer from './tv/reducerTv';
import thunk from 'redux-thunk';

const rootReducers = combineReducers({
	tv: tvReducer,
	phones: phoneReducer,
	comments: commentsReducer,
});

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
