import {
	FETCH_BOOK_LOADING,
	FETCH_BOOK_SUCCESS,
	FETCH_BOOK_ERROR,
} from '../constants.js';
import axios from 'axios';

export const fetchBooksLoading = () => ({ type: FETCH_BOOK_LOADING });

export const fetchBooksSuccess = (data) => ({
	type: FETCH_BOOK_SUCCESS,
	payload: data,
});

export const fetchBooksError = (error) => ({
	type: FETCH_BOOK_ERROR,
	payload: error,
});

export const fetchApiBook = () => {
	return (dispatch) => {
		dispatch(fetchBooksLoading());

		axios
			.get()
			.then((res) => {
				console.log(res);
				dispatch(fetchBooksSuccess(res.data));
			})
			.catch((error) => {
				dispatch(fetchBooksError(error.message));
			});
	};
};
