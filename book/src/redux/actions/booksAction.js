import { ADD_BOOKS, DELETE_BOOK } from '../constants';

export const addBook = (book) => ({
	type: ADD_BOOKS,
	payload: book /** { title, author} */,
});

export const deleteBook = (id) => ({
	type: DELETE_BOOK,
	payload: id,
});
