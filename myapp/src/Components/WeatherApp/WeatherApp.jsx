import React from 'react'
import './WeatherApp.sass'
import Container from 'react-bootstrap/Container';
import { AiOutlineSearch } from 'react-icons/ai';
import { TiWeatherShower,TiWeatherDownpour } from 'react-icons/ti';

function WeatherApp() {
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
            <h1 style={{ fontSize:'5rem'}}>23°C</h1>
            <h3 style={{ fontSize:'1.8rem'}}>giresun,keşap</h3>
          </div>
          <div className="weather-icon">
            <TiWeatherShower style={{ fontSize:'10rem'}}></TiWeatherShower>
          </div>
        </div>
        <div className="weather-section">
          <div className="hour">
            <h2>21°C</h2>
            <TiWeatherDownpour style={{fontSize:'3rem'}}></TiWeatherDownpour>
          <h4 style={{marginTop:'1rem'}}>12:00 PM</h4>
          </div>
          <div className="hour">
          <h2>21°C</h2>
            <TiWeatherDownpour style={{fontSize:'3rem'}}></TiWeatherDownpour>
          <h4 style={{marginTop:'1rem'}}>12:00 PM</h4>
          </div>
          <div className="hour">
          <h2>21°C</h2>
            <TiWeatherDownpour style={{fontSize:'3rem'}}></TiWeatherDownpour>
          <h4 style={{marginTop:'1rem'}}>12:00 PM</h4>
          </div>
        </div>
        <div className="weather-section">
          <div className="day">
            <h2>21°C</h2>
            <TiWeatherDownpour style={{fontSize:'3rem'}}></TiWeatherDownpour>
            <h4 style={{marginTop:'1rem'}}>Pzt</h4>    
          </div>
          <div className="day">
            <h2>21°C</h2>
            <TiWeatherDownpour style={{fontSize:'3rem'}}></TiWeatherDownpour>
            <h4 style={{marginTop:'1rem'}}>Pzt</h4>    
          </div>
          <div className="day">
            <h2>21°C</h2>
            <TiWeatherDownpour style={{fontSize:'3rem'}}></TiWeatherDownpour>
            <h4 style={{marginTop:'1rem'}}>Pzt</h4>    
          </div>
          <div className="day">
            <h2>21°C</h2>
            <TiWeatherDownpour style={{fontSize:'3rem'}}></TiWeatherDownpour>
            <h4 style={{marginTop:'1rem'}}>Pzt</h4>    
          </div>
          <div className="day">
            <h2>21°C</h2>
            <TiWeatherDownpour style={{fontSize:'3rem'}}></TiWeatherDownpour>
            <h4 style={{marginTop:'1rem'}}>Pzt</h4>    
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherApp