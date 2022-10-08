import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import tvImg from '../assets/images/tv.jpg';
import { buyTv } from '../redux/tv/actionTv';

const TvContainer = () => {
	const tv = useSelector((state) => state.tv);
	const dispatch = useDispatch();
	return (
		<div className='container'>
			<img src={tvImg} alt='phone' />
			<p>
				Disponibilite:
				<span id='count'>{tv.tv}</span>
			</p>
			<button onClick={() => dispatch(buyTv())}>Acheter</button>
		</div>
	);
};

export default TvContainer;
