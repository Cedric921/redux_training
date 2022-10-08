import React from 'react';

const Navbar = () => {
	return (
		<header>
			<div className='d-flex flex-column flex-md-row p-3 border-bottom bg-danger text-white'>
				<h4 className='mr-md-auto'>
					<a href='/' className='text-decoration-none text-white'>
						header
					</a>
				</h4>
				{/* menu  */}
			</div>
		</header>
	);
};

export default Navbar;
