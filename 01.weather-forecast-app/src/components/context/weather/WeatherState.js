import React, { useReducer } from 'react';
import axios from 'axios';
import weatherContext from './weatherContext';
import weatherReducer from './weatherReducer';
import { SET_WEATHER } from '../Types';
const WeatherState = (props) => {
	const initialState = {
		city: '',
		stats: {}
	};
	const [ state, dispatch ] = useReducer(weatherReducer, initialState);

	// GET WEATHER
	const getWeather = async (city) => {
		try {
			const res = await axios.get(
				`http://api.weatherapi.com/v1/current.json?key=04041e8748034907a3082946211908&q=${city}&aqi=no`
			);
			dispatch({
				type: SET_WEATHER,
				payload: res.data
			});
		} catch (err) {
			console.log('IN CATCH!!!', err);
		}
	};

	// SET HOURLY WEATHER
	const hourlyWeather = async () => {};

	return (
		<weatherContext.Provider
			value={{
				city: state.city,
				stats: state.stats,
				getWeather,
				hourlyWeather
			}}
		>
			{props.children}
		</weatherContext.Provider>
	);
};

export default WeatherState;
