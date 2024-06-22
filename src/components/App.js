// src/components/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, { css } from 'styled-components';
import WeatherCard from './WeatherCard';
import CitySelector from './CitySelector';
import CityList from './CityList';

const API_KEY = 'ca3c9fd6b83f7369f2728d2089571625';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  ${(props) =>
    props.weatherType === 'Thunderstorm' &&
    css`
      background: linear-gradient(to bottom, black, #292e35);
      color: white;
    `}
  ${(props) =>
    props.weatherType === 'Clear' &&
    css`
      background: linear-gradient(to bottom, #4ca1af, #c4e0e5);
      color: black;
    `}
  ${(props) =>
    props.weatherType === 'Clouds' &&
    css`
      background: linear-gradient(to bottom, #bcc9d4, #7a8593);
      color: black;
    `}
  ${(props) =>
    props.weatherType === 'Rain' &&
    css`
      background: linear-gradient(to bottom, #00467f, #a5ccff);
      color: white;
    `}
`;

const App = () => {
  const [currentCity, setCurrentCity] = useState('London');
  const [weatherData, setWeatherData] = useState(null);
  const [weatherType, setWeatherType] = useState('Clear');

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const currentWeather = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${API_KEY}&units=metric`
        );

        const forecastWeather = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${currentCity}&appid=${API_KEY}&units=metric`
        );

        setWeatherData({
          current: currentWeather.data,
          forecast: forecastWeather.data.list.slice(0, 7),
        });

        setWeatherType(currentWeather.data.weather[0].main);
      } catch (error) {
        console.error('Error fetching weather data: ', error);
      }
    };

    fetchWeatherData();
  }, [currentCity]);

  return (
    <Container weatherType={weatherType}>
      <h1>Practica - Weather Forecast</h1>
      <CitySelector onSelectCity={setCurrentCity} />
      <CityList onSelectCity={setCurrentCity} />
      {weatherData && <WeatherCard currentCity={currentCity} weatherData={weatherData} />}
    </Container>
  );
};

export default App;
