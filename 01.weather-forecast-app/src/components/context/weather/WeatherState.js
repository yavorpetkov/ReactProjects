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
				`http://api.weatherapi.com/v1/current.json?key=${process.env
					.REACT_APP_WEATHER_API_KEY}&q=${city}&aqi=no`
			);
			dispatch({
				type: SET_WEATHER,
				payload: res.data
			});
		} catch (err) {
			console.log('IN CATCH!!!', err);
		}
	};

	return (
		<weatherContext.Provider
			value={{
				city: state.city,
				stats: state.stats,
				getWeather
			}}
		>
			{props.children}
		</weatherContext.Provider>
	);
};

export default WeatherState;
