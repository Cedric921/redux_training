import {
	FETCH_BOOK_LOADING,
	FETCH_BOOK_SUCCESS,
	FETCH_BOOK_ERROR,
} from '../constants.js';

const initialState = {
	isLoading: false,
	fetchedBooks: [],
	error: '',
};

const fetchedBooksReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_BOOK_LOADING:
			return {
				isLoading: true,
				fetchedBooks: [],
				error: '',
			};

		case FETCH_BOOK_SUCCESS:
			return {
				isLoading: false,
				fetchedBooks: action.payload,
				error: '',
			};

		case FETCH_BOOK_ERROR:
			return {
				isLoading: false,
				fetchedBooks: [],
				error: action.payload,
			};

		default:
			return state;
	}
};

export default fetchedBooksReducer;
