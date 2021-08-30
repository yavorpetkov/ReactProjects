import React from 'react';

import WeatherForm from './WeatherForm';
import CurrentWeather from './CurrentWeather';

const Body = () => {
	return (
		<div className="container">
			<WeatherForm />
			<CurrentWeather />
		</div>
	);
};

export default Body;
