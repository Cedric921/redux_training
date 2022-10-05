import React from 'react';
import phone from '../assets/images/phone.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { buyPhone } from '../redux/phone/actionPhone';

const PhoneComponent = (props) => {
	const phones = useSelector((state) => state.phones);
	const dispatch = useDispatch();
	return (
		<div className='container'>
			<img src={phone} alt='phone' />
			<p>
				Disponibilite:
				<span id='count'>{phones}</span>
			</p>
			<button onClick={() => dispatch(buyPhone())}>Acheter</button>
		</div>
	);
};

// const mapStateToProps = (state) => {
// 	return {
// 		phones: state.phones,
// 	};
// };

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		buyPhone: () => dispatch(buyPhone()),
// 		//we can also do : dispatch({ type: "BUY_PHONE"})
// 	};
// };

// export default connect(mapStateToProps, mapDispatchToProps)(PhoneComponent);

export default PhoneComponent;
