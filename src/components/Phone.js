import React from 'react';
import phone from '../assets/images/phone.jpg';
import { connect } from 'react-redux';
import { buyPhone } from '../redux/phone/actionPhone';

const PhoneComponent = (props) => {
	return (
		<div className='container'>
			<img src={phone} alt='phone' />
			<p>
				Disponibilite:
				<span id='count'>{props.phones}</span>
			</p>
			<button onClick={props.buyPhone}>Acheter</button>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		phones: state.phones,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		buyPhone: () => dispatch(buyPhone()),
		//we can also do : dispatch({ type: "BUY_PHONE"})
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneComponent);
