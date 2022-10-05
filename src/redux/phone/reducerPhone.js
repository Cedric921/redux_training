import { BUY_PHONE } from './type';

const initialState = {
	phones: 5,
};

const phoneReducer = (state = initialState, action) => {
	switch (action.type) {
		case BUY_PHONE:
			return { ...state, phones: state.phones - action.payload };

		default:
			return state;
	}
};

export default phoneReducer;
