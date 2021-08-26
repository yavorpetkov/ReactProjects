import React, { useContext } from 'react';
import WeatherContext from './context/weather/weatherContext';

const CurrentWeather = () => {
	const weatherContext = useContext(WeatherContext);
	const { city, stats } = weatherContext;

	return (
		<div>
			<h1>Current Weather in: {city}</h1>
			{stats.temp_c}
		</div>
	);
};

export default CurrentWeather;
