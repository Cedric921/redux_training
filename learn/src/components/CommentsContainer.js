import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { apiCall } from '../redux/comments/actionComment';
const CommentsContainer = ({ apiData, apiComment }) => {
	useEffect(() => {
		apiComment();
	}, [apiComment]);
	const displayData = apiData.isLoading ? (
		<p>Loading ...</p>
	) : apiData.error ? (
		<p>{apiData.error}</p>
	) : (
		<div>
			{apiData.comments.slice(0, 10).map((comment) => (
				<div key={comment.id} className='container-comment'>
					<h2>{comment.name}</h2>
					<h6>{comment.email}</h6>
					<p>{comment.body}</p>
					<hr />
				</div>
			))}
		</div>
	);
	return <div>{displayData}</div>;
};

const mapStateToProps = (state) => {
	return {
		apiData: state.comments,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		apiComment: () => dispatch(apiCall()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);
