import React, { useEffect, useState } from 'react'
import axios from "axios";
import './WeatherApp.sass'
import Container from 'react-bootstrap/Container';
import { AiOutlineSearch } from 'react-icons/ai';
import { TiWeatherShower, TiWeatherDownpour } from 'react-icons/ti';

function WeatherApp() {

  const key = "861d864a8e24788a2f765481015907bd";
  const [search , setSearch] = useState("");
  const [city ,setCity] = useState({name:"" , main: {temp:0}});
    useEffect(() => {
      async function getApi() {
          try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`);
            console.log(response);
            setCity({...response.data, main : {temp:Math.round(response.data.main.temp)}});
          } catch (error) {
            console.error(error);
          }
      }
      getApi();
    } , [search])
    console.log(search)  
  



  return (
    <div className="app">
      <Container>
        <div className="weather-search">
          <input onChange={(e) => setSearch(e.target.value)}  type="text" placeholder='search' className='search-input' />
        </div>
      </Container>
      <div className="weather">
        <div className="weather-section">
          <div className="degree">
            <p>{city.main.temp}°C</p>
            <h4>{city.name}</h4>
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