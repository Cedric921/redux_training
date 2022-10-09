import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, deleteBook } from '../redux/actions/booksAction';

const AddBooks = ({ libraryData }) => {
	const dispatch = useDispatch();
	const library = useSelector((state) => state.library);
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
		dispatch(addBook(state));
	};

	const handleDelete = (id) => dispatch(deleteBook(id));

	const handleBook =
		library.length > 0 ? (
			library.map((book) => (
				<li className='list-group-item list-group-danger d-flex justify-content-between align-items-center'>
					<h4>{book.title}</h4>
					<div>
						<span>{book.author}</span>
						<button
							className='btn btn-sm btn-danger mx-2 px-2'
							onClick={() => handleDelete(book.id)}
						>
							x
						</button>
					</div>
				</li>
			))
		) : (
			<p className='text-center'>No book to show</p>
		);

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
						<ul className='list-group'>{handleBook}</ul>
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

// const addStateToProps = (state) => ({
// 	libraryData: state.library,
// });

// const mapDispatchToProps = (dispatch) => {};

// export default connect(addStateToProps, mapDispatchToProps)(AddBooks);

export default React.memo(AddBooks);
