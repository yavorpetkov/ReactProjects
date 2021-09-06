import React, { useState, useContext } from 'react';
import moment from 'moment';
import WeatherContext from './context/weather/weatherContext';

const WeatherForm = () => {
	const weatherContext = useContext(WeatherContext);
	const { getWeather } = weatherContext;

	const [ text, setText ] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();
		getWeather(text);
	};

	const onChange = (e) => {
		setText(e.target.value);
	};

	let dateNew = moment(new Date()).format('YYYY-MM-DD');
	console.log(dateNew);
	return (
		<div className="container">
			<h1>
				<form onSubmit={onSubmit}>
					<input type="text" name="text" placeholder="Search City..." value={text} onChange={onChange} />
					<input type="date" name="date" />
					<button type="submit">Search</button>
				</form>
			</h1>
		</div>
	);
};

export default WeatherForm;
