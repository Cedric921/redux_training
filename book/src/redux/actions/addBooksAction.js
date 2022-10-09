import { ADD_BOOKS } from '../constants';

export const addBook = (book) => ({
	type: ADD_BOOKS,
	payload: book /** { title, author} */,
});
