import React from 'react';

const WeatherForm = () => {
	const onSubmit = () => {};

	return (
		<div>
			<h1>
				<form onSubmit={onSubmit} className="form">
					<input type="text" name="text" placeholder="Search Users..." value="text" onChange="onChange" />
					<input type="submit" value="Search" className="btn btn-dark btn-block" />
				</form>
			</h1>
		</div>
	);
};

export default WeatherForm;
