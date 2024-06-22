// src/components/WeatherCard.js
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const WeatherCard = ({ currentCity, weatherData }) => {
  const currentWeather = weatherData.current;
  const forecastWeather = weatherData.forecast;

  return (
    <Card>
      <h2>Weather in {currentCity}</h2>
      <p>Current Temperature: {currentWeather.main.temp}°C</p>
      <p>Weather Description: {currentWeather.weather[0].description}</p>
      <h3>Forecast for the week:</h3>
      <ul>
        {forecastWeather.map((forecast, index) => (
          <li key={index}>
            {forecast.dt_txt}: {forecast.main.temp}°C - {forecast.weather[0].description}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default WeatherCard;
