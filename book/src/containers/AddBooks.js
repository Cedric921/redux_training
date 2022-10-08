import React, { useState } from 'react';

const AddBooks = () => {
	const [state, setState] = useState({
		title: '',
		author: '',
	});

	const handlerChange = (e) => {
		e.preventDefault();
		setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(state);
	};
	return (
		<main role='main'>
			<div className='jumbotron jumbotron-fluid bg-light p-5'>
				<div className='container text-center mt-5'>
					<div className='display-4'>Books</div>
					<p>Ajouter un livre</p>

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
								placeholder='Title'
								required
								onChange={handlerChange}
							/>
						</div>
						<div className='form-group'>
							<input
								type='text'
								name='author'
								id='author'
								className='form-control'
								placeholder='Autor'
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
								Add book
							</button>
						</div>
					</form>
				</div>
			</div>
			<div className='container mt-5' style={{ minHeight: 200 }}>
				<div className='row'>
					<div className='col-md-12'>
						<ul className='list-group'>
							<li className='list-group-item list-group-danger d-flex justify-content-between'>
								Books saved
							</li>
						</ul>
					</div>
					<div className='d-flex justify-content-center'>
						<button className='btn btn-danger mt-4 mb-5'>
							Delete all books
						</button>
					</div>
				</div>
			</div>
		</main>
	);
};

export default AddBooks;
