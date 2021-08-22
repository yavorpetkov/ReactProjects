import React, { useReducer } from 'react';

import weatherContext from './weatherContext';
import weatherReducer from './weatherReducer';

const WeatherState = (props) => {
	const initialState = {};

	const [ state, dispatch ] = useReducer(weatherReducer, initialState);

	return <weatherContext.Provider value={{}}>{props.children}</weatherContext.Provider>;
};

export default WeatherState;
