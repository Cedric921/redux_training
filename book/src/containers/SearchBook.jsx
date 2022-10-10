import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const SearchBook = () => {
	const [subject, setSubject] = useState('');

	const handlerChange = (e) => {
		e.preventDefault();
		setSubject(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(subject);
	};
	return (
		<main role='main'>
			<div className='jumbotron jumbotron-fluid bg-light p-5'>
				<div className='container text-center mt-5'>
					<div className='display-4'>Books</div>
					<p>Search from google books</p>

					<form
						action=''
						className='form-inline d-flex justify-content-center flex-xs-column flex-wrap gap-2'
					>
						<div className='form-group'>
							<input
								type='text'
								name='title'
								id='title'
								className='form-control'
								placeholder='What subject you need'
								required
								onChange={handlerChange}
							/>
						</div>
						<div className='form-group'>
							<button
								type='button'
								name=''
								id=''
								className='btn btn-danger'
								onClick={handleSubmit}
							>
								Search
							</button>
						</div>
					</form>
				</div>
			</div>
			<div className='container' style={{ minHeight: 200 }}>
				<div className='accordion'>
					<div className='card text-left m-5 p-2'>
						<div className='collapse' data-parent='accordion'>
							<div className='card-body p-3'>
								{/**
								 *
								 */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default SearchBook;
