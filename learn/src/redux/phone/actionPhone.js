// actions

import { BUY_PHONE } from './type';

export const buyPhone = (nombre = 1) => ({
	type: BUY_PHONE,
	payload: nombre,
});
