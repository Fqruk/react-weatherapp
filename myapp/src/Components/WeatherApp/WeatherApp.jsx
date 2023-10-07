import React from 'react'
import './WeatherApp.sass'
import Container from 'react-bootstrap/Container';
import { AiOutlineSearch } from 'react-icons/ai';

function WeatherApp() {
  return (
    <div className="app">
      <Container>
        <div className="weather-search">
          <input type="text" placeholder='search' className='search-input'/>
          <button className='search-button'><AiOutlineSearch style={{ fontSize:'3rem' , color:'#09a0f2' }}></AiOutlineSearch></button>
        </div>
      </Container>
    </div>
  )
}

export default WeatherApp