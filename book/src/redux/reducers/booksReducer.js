import { ADD_BOOKS, DELETE_BOOK } from '../constants';

const initialState = {
	books: [],
};

const addIdHelper = (book) => ({
	id: new Date().toISOString().split(':').join('-'),
	title: book.title,
	author: book.author,
});

const AddbookReducer = (state = initialState.books, action) => {
	state = JSON.parse(localStorage.getItem('booksData')) ?? [];

	switch (action.type) {
		case ADD_BOOKS:
			state = [...state, addIdHelper(action.payload)];
			localStorage.setItem('booksData', JSON.stringify(state));
			return state;

		case DELETE_BOOK:
			state = state.filter((book) => book.id !== action.payload);
			localStorage.setItem('booksData', JSON.stringify(state));
			return state;

		default:
			return state;
	}
};

export default AddbookReducer;
