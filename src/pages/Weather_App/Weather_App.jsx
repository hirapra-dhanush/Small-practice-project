import React, { useState, useEffect } from 'react';
import {
  WiRain,
  WiHumidity,
  WiStrongWind,
  WiThermometer,
} from 'react-icons/wi';
import { FaCloud, FaEye, FaSearch, FaMapMarkerAlt } from 'react-icons/fa';

export default function WeatherCard() {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState('London');
  const [input, setInput] = useState('');

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(
          `http://api.weatherapi.com/v1/current.json?key=90d01e0b8cb44186b7c41632252402&q=${location}&aqi=yes`
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }
    fetchWeather();
  }, [location]);

  const handleSearch = () => {
    if (input.trim() !== '') {
      setLocation(input);
    }
  };

  if (!data) {
    return (
      <div className='flex justify-center items-center h-screen w-screen bg-gradient-to-br from-indigo-900 via-purple-700 to-blue-500 text-white text-3xl font-bold animate-pulse'>
        Loading...
      </div>
    );
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gradient-to-br from-indigo-900 via-purple-700 to-blue-500 text-white p-6'>
      <div className='mb-6 flex space-x-2 bg-white rounded-full p-3 shadow-xl w-full max-w-md backdrop-blur-md bg-opacity-80'>
        <input
          type='text'
          placeholder='Search city...'
          className='px-4 py-3 rounded-full text-gray-900 focus:outline-none w-full text-lg'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className='px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-700 flex items-center justify-center transition duration-300'>
          <FaSearch className='text-xl' />
        </button>
      </div>
      <div className='w-full max-w-5xl p-8 rounded-3xl shadow-2xl bg-gray-900 text-center transform transition duration-500 hover:scale-105 backdrop-blur-lg bg-opacity-90 border border-pink-400 flex flex-row justify-between items-center'>
        <div className='text-left'>
          <h2 className='text-4xl font-extrabold flex items-center'>
            <FaMapMarkerAlt className='mr-2 text-yellow-400 animate-bounce' />{' '}
            {data.location.name}, {data.location.country}
          </h2>
          <p className='text-2xl text-gray-300 font-semibold mt-2'>
            {data.current.condition.text}
          </p>
          <h1 className='text-8xl font-black my-4 drop-shadow-lg text-pink-400'>
            {data.current.temp_c}°C
          </h1>
          <p className='text-sm text-gray-400'>
            Last updated: {data.current.last_updated}
          </p>
        </div>
        <img
          src={data.current.condition.icon}
          alt={data.current.condition.text}
          className='w-32 h-32 mx-4 animate-wiggle'
        />
        <div className='grid grid-cols-3 gap-6 text-lg'>
          <div className='flex items-center space-x-2'>
            <WiThermometer className='text-5xl text-red-500' />
            <span>Feels Like: {data.current.feelslike_c}°C</span>
          </div>
          <div className='flex items-center space-x-2'>
            <WiRain className='text-5xl text-blue-400' />
            <span>Precip: {data.current.precip_mm} mm</span>
          </div>
          <div className='flex items-center space-x-2'>
            <WiHumidity className='text-5xl text-blue-200' />
            <span>Humidity: {data.current.humidity}%</span>
          </div>
          <div className='flex items-center space-x-2'>
            <WiStrongWind className='text-5xl text-gray-400' />
            <span>
              Wind: {data.current.wind_kph} kph ({data.current.wind_dir})
            </span>
          </div>
          <div className='flex items-center space-x-2'>
            <FaCloud className='text-5xl text-gray-300' />
            <span>Cloud Cover: {data.current.cloud}%</span>
          </div>
          <div className='flex items-center space-x-2'>
            <FaEye className='text-5xl text-yellow-400' />
            <span>Visibility: {data.current.vis_km} km</span>
          </div>
        </div>
      </div>
    </div>
  );
}
