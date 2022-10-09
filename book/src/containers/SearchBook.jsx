import React from 'react';
import { useSelector } from 'react-redux';

const SearchBook = () => {
	const library = useSelector((state) => state.library);
	console.log(library);
	return (
		<div className='pt-5 '>
			<div className='mt-5'>search</div>
		</div>
	);
};

export default SearchBook;
