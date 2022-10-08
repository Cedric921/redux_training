import React, { useState } from 'react';
import phone from '../assets/images/phone.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { buyPhone } from '../redux/phone/actionPhone';

const PhoneContainer = (props) => {
	const phones = useSelector((state) => state.phones);
	const dispatch = useDispatch();
	const [num, setNum] = useState(0);
	return (
		<div className='container'>
			<img src={phone} alt='phone' />
			<p>
				Disponibilite:
				<span id='count'>{phones.phones}</span>
			</p>
			<div className='input'>
				<label htmlFor=''>Nombre</label>
				<input
					type='number'
					value={num}
					name='nombre'
					onChange={(e) => setNum(e.target.value)}
				/>
			</div>
			<button onClick={() => dispatch(buyPhone(num))}>Acheter</button>
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

export default PhoneContainer;
