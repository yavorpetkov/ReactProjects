import React, { useContext } from 'react';
import WeatherContext from './context/weather/weatherContext';
import CurrentWeather from './CurrentWeather';

const Body = () => {
	const weatherContext = useContext(WeatherContext);
	const { getWeather } = weatherContext;

	return (
		<div>
			<button onClick={getWeather}>state</button>

			<CurrentWeather />
		</div>
	);
};

export default Body;
