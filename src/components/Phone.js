import React from 'react';
import phone from '../assets/images/phone.jpg';

const PhoneComponent = () => {
	return (
		<div className='container'>
			<img src={phone} alt='phone' />
			<p>
				Disponibilite:
				<span id='count'></span>
			</p>
			<button id=''>Acheter</button>
		</div>
	);
};

export default PhoneComponent;
