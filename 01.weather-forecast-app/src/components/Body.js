import React, { useContext } from 'react';
import WeatherContext from './context/weather/weatherContext';

const Body = () => {
	const weatherContext = useContext(WeatherContext);

	const onClick = () => {
		weatherContext.getWeather();
	};
	return (
		<div>
			<button onClick={onClick}>state</button>
		</div>
	);
};

export default Body;
