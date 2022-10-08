import axios from 'axios';
import {
	LOAD_COMMENTS,
	LOAD_COMMENTS_SUCCES,
	LOAD_COMMENTS_ERROR,
} from './type';

// when data is loading
export const loadApiComments = () => ({ type: LOAD_COMMENTS });

//when fetching is success
export const loadCommentsSuccess = (comments) => ({
	type: LOAD_COMMENTS_SUCCES,
	payload: comments,
});

// when we have an error when fetching
export const loadCommentsError = (error) => ({
	type: LOAD_COMMENTS_ERROR,
	payload: error,
});

export const apiCall = () => {
	return (dispatch) => {
		dispatch(loadApiComments());
		axios
			.get(`https://jsonplaceholder.typicode.com/comments`)
			.then((res) => dispatch(loadCommentsSuccess(res.data)))
			.catch((error) => loadCommentsError(error.message));
	};
};
