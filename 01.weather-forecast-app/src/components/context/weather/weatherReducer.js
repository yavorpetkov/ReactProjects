/* eslint-disable import/no-anonymous-default-export */
import { SET_WEATHER } from '../Types';
export default (state, action) => {
	switch (action.type) {
		case SET_WEATHER:
			return {
				...state,
				city: `${action.payload.location.name}, ${action.payload.location.country}`,
				stats: action.payload.current
			};
		default:
			break;
	}
};
