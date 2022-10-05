import { BUY_TV } from './type';

const initialState = {
	tv: 20,
};
const tvReducer = (state = initialState, action) => {
	switch (action.type) {
		case BUY_TV:
			return { ...state, tv: state.tv - 1 };

		default:
			return state;
	}
};

export default tvReducer;
