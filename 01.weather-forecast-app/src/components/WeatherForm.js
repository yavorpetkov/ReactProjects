import React, { useState, useContext } from 'react';
import WeatherContext from './context/weather/weatherContext';

const WeatherForm = () => {
	const weatherContext = useContext(WeatherContext);
	const { getWeather } = weatherContext;

	const [ text, setText ] = useState('');

	const onSubmit = () => {
		getWeather(text);
	};

	const onChange = (e) => {
		e.preventDefault();
		// use brackets and e.target.name to shorten it if there is more than 1 input
		setText(e.target.value);
	};

	return (
		<div>
			<h1>
				<form onSubmit={onSubmit}>
					<input type="text" name="text" placeholder="Search City..." value={text} onChange={onChange} />
					<input type="submit" value="Search" />
				</form>
			</h1>
		</div>
	);
};

export default WeatherForm;
