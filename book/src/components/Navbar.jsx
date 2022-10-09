import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<header style={{ position: 'absolute', right: 0, left: 0, top: 0 }}>
			<div className='d-flex flex-xs-column flex-sm-row justify-content-between flex-md-row p-3 border-bottom bg-danger text-white px-5'>
				<h4 className='mr-md-auto'>
					<Link to='/' className='text-decoration-none text-white'>
						Vb
					</Link>
				</h4>
				{/* menu  */}
				<div>
					<nav className='btn-group'>
						<Link to='/' className='btn btn-outline-light'>
							Home
						</Link>
						<Link to='/search' className='btn btn-outline-light'>
							Search
						</Link>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
