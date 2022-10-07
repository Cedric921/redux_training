import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import phoneReducer from './phone/reducerPhone';
import commentsReducer from './comments/reducerComment';
import tvReducer from './tv/reducerTv';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//for redux dev-tool
//  first choice
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
	tv: tvReducer,
	phones: phoneReducer,
	comments: commentsReducer,
});

const store = createStore(
	rootReducers,
	// composeEnhancers(applyMiddleware(thunk)) //first choice
	composeWithDevTools(applyMiddleware(thunk)) //second  choice
);

export default store;
