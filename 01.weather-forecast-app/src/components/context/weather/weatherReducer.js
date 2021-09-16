/* eslint-disable import/no-anonymous-default-export */
import { SET_WEATHER, HOURLY_WEATHER } from '../Types';
export default (state, action) => {
	switch (action.type) {
		case SET_WEATHER:
			return {
				...state,
				city: `${action.payload.location.name}, ${action.payload.location.country}`,
				stats: action.payload.current
			};
		case HOURLY_WEATHER:
			return {
				...state,
				hourly: action.payload
			};
		default:
			break;
	}
};
