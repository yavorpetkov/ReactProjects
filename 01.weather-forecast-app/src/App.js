import Navbar from './components/layout/Navbar';
import Body from './components/Body';
import WeatherState from './components/context/weather/WeatherState';
import './App.css';

function App() {
	return (
		<WeatherState>
			<Navbar />

			<Body />
		</WeatherState>
	);
}

export default App;
