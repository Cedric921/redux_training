import { ADD_BOOKS, DELETE_BOOK, DELETE_ALL_BOOKS } from '../constants';

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
			break;
		case DELETE_BOOK:
			state = state.filter((book) => book.id !== action.payload);
			break;

		case DELETE_ALL_BOOKS:
			state = initialState.books;
			break;

		default:
			break;
	}

	localStorage.setItem('booksData', JSON.stringify(state));
};

export default AddbookReducer;
