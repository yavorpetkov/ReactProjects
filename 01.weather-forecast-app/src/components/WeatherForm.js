import React from 'react';

const WeatherForm = () => {
	return (
		<div className="container">
			<h1>
				<form>
					<input type="text" name="text" placeholder="Search City..." />
					<input type="date" name="date" />
					<button type="submit">Search</button>
				</form>
			</h1>
		</div>
	);
};

export default WeatherForm;
