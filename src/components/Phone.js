import React from 'react';
import phone from '../assets/images/phone.jpg';
import { connect } from 'react-redux';

const PhoneComponent = (props) => {
	return (
		<div className='container'>
			<img src={phone} alt='phone' />
			<p>
				Disponibilite:
				<span id='count'>{props.phones}</span>
			</p>
			<button id=''>Acheter</button>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		phones: state.phones,
	};
};

export default connect(mapStateToProps)(PhoneComponent);
