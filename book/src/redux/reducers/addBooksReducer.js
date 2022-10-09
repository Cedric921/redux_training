import { ADD_BOOKS } from '../constants';

const initialState = {
	books: [],
};

const addIdHelper = (book) => ({
	id: new Date().getUTCSeconds(),
	title: book.title,
	author: book.author,
});

const AddbookReducer = (state = initialState.books, action) => {
	state = JSON.parse(localStorage.getItem('booksData')) ?? [];

	switch (action.type) {
		case ADD_BOOKS:
			state = [...state.books, addIdHelper(action.payload)];
			localStorage.setItem('booksData', JSON.stringify(state));
			return state;

		default:
			return state;
	}
};

export default AddbookReducer;
