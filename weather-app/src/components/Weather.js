import React, {useState} from 'react';
import axios from 'axios';
import './Weather.css';

const Weather = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');
    const apiKey = '78805d20881cd884b637b0fa1130e385';

    const handleSearch = async () => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
            );
            setWeather(response.data);
            setError('');
        } catch (error) {
            console.error('Error fetching the weather data', error);
            setError('Error fetching the weather data');
            setWeather(null);
        }
    };

    return (
        <div className="weather-container">
            <h1>Weather App</h1>
            <input
                type="text"
                placeholder="Enter City Name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            {error && <p>{error}</p>}
            {weather && weather.main && weather.weather && weather.wind && (
                <div className="weather-info">
                    <h2>{weather.name}</h2>
                    <p>Temperature: {weather.main.temp}°C</p>
                    <p>Weather: {weather.weather[0].description}</p>
                    <p>Humidity: {weather.main.humidity}%</p>
                    <p>Wind speed: {weather.wind.speed} m/s</p>
                </div>
            )}
        </div>
    );
};

export default Weather;