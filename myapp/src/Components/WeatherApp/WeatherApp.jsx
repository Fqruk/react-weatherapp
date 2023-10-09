import React, { useEffect, useState } from 'react'
import axios from "axios";
import './WeatherApp.sass'
import Container from 'react-bootstrap/Container';
import { AiOutlineSearch } from 'react-icons/ai';
import { TiWeatherShower, TiWeatherDownpour } from 'react-icons/ti';

function WeatherApp() {

  const key = "861d864a8e24788a2f765481015907bd";

  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${key}&units=metric`);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  } , [])

  return (
    <div className="app">
      <Container>
        <div className="weather-search">
          <input type="text" placeholder='search' className='search-input' />
          <button className='search-button'><AiOutlineSearch style={{ fontSize: '3rem', color: '#09a0f2' }}></AiOutlineSearch></button>
        </div>
      </Container>
      <div className="weather">
        <div className="weather-section">
          <div className="degree">
            <p>23°C</p>
            <h4>giresun,keşap</h4>
          </div>
          <div className="weather-icon">
            <TiWeatherShower></TiWeatherShower>
          </div>
        </div>
        <div className="weather-section">
          <div className="hour">
            <h2>21°C</h2>
            <TiWeatherDownpour style={{ fontSize: '3rem' }}></TiWeatherDownpour>
            <h4 style={{ marginTop: '1rem' }}>12:00 PM</h4>
          </div>
          <div className="hour">
            <h2>21°C</h2>
            <TiWeatherDownpour style={{ fontSize: '3rem' }}></TiWeatherDownpour>
            <h4 style={{ marginTop: '1rem' }}>12:00 PM</h4>
          </div>
          <div className="hour">
            <h2>21°C</h2>
            <TiWeatherDownpour style={{ fontSize: '3rem' }}></TiWeatherDownpour>
            <h4 style={{ marginTop: '1rem' }}>12:00 PM</h4>
          </div>
        </div>
        <div className="weather-section">
          <div className="day">
            <h2>21°C</h2>
            <TiWeatherDownpour style={{ fontSize: '3rem' }}></TiWeatherDownpour>
            <h4 style={{ marginTop: '1rem' }}>Pzt</h4>
          </div>
          <div className="day">
            <h2>21°C</h2>
            <TiWeatherDownpour style={{ fontSize: '3rem' }}></TiWeatherDownpour>
            <h4 style={{ marginTop: '1rem' }}>Pzt</h4>
          </div>
          <div className="day">
            <h2>21°C</h2>
            <TiWeatherDownpour style={{ fontSize: '3rem' }}></TiWeatherDownpour>
            <h4 style={{ marginTop: '1rem' }}>Pzt</h4>
          </div>
          <div className="day">
            <h2>21°C</h2>
            <TiWeatherDownpour style={{ fontSize: '3rem' }}></TiWeatherDownpour>
            <h4 style={{ marginTop: '1rem' }}>Pzt</h4>
          </div>
          <div className="day">
            <h2>21°C</h2>
            <TiWeatherDownpour style={{ fontSize: '3rem' }}></TiWeatherDownpour>
            <h4 style={{ marginTop: '1rem' }}>Pzt</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherApp