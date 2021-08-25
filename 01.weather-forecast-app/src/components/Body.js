import React, { useContext } from 'react';
import WeatherContext from './context/weather/weatherContext';

const Body = () => {
	const weatherContext = useContext(WeatherContext);
	const { getWeather } = weatherContext;

	return (
		<div>
			<button onClick={getWeather}>state</button>
		</div>
	);
};

export default Body;
