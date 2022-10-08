import {
	LOAD_COMMENTS,
	LOAD_COMMENTS_SUCCES,
	LOAD_COMMENTS_ERROR,
} from './type';

const initialState = {
	isLoading: false,
	comments: [],
	error: '',
};

const commentsReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_COMMENTS:
			return { ...state, isLoading: true };
		case LOAD_COMMENTS_SUCCES:
			return {
				...state,
				isLoading: false,
				comments: action.payload,
				error: '',
			};
		case LOAD_COMMENTS_ERROR:
			return {
				...state,
				isLoading: false,
				comments: [],
				error: action.payload,
			};

		default:
			return state;
	}
};

export default commentsReducer;
