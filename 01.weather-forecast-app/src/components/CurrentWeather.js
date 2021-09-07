import React, { useEffect, useContext } from 'react';
import WeatherContext from './context/weather/weatherContext';

const CurrentWeather = () => {
	const weatherContext = useContext(WeatherContext);
	const { getWeather, city, stats } = weatherContext;
	useEffect(
		() => {
			getWeather(`Sofia`);
		},
		// eslint-disable-next-line
		[]
	);

	return (
		<div className="container">
			<h1>Current Weather in: {city}</h1>
			{stats.temp_c}
		</div>
	);
};

export default CurrentWeather;
