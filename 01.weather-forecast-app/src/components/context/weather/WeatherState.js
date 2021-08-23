import React, { useReducer } from 'react';
import axios from 'axios';
import weatherContext from './weatherContext';
import weatherReducer from './weatherReducer';
import { SET_WEATHER } from '../Types';

const WeatherState = (props) => {
	const initialState = {
		city: '',
		tempC: []
	};

	const [ state, dispatch ] = useReducer(weatherReducer, initialState);

	// GET WEATHER
	const getWeather = async () => {
		const res = await axios.get(
			`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=Sofia&aqi=no`
		);
		dispatch({
			type: SET_WEATHER,
			payload: res.data
		});
	};

	return (
		<weatherContext.Provider
			value={{
				city: state.city,
				tempC: state.tempC,
				getWeather
			}}
		>
			{props.children}
		</weatherContext.Provider>
	);
};

export default WeatherState;
