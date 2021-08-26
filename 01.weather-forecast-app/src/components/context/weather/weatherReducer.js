/* eslint-disable import/no-anonymous-default-export */
import { SET_WEATHER } from '../Types';
export default (state, action) => {
	switch (action.type) {
		case SET_WEATHER:
			return {
				...state,
				city: action.payload.location.name,
				stats: action.payload
			};
		default:
			break;
	}
};
