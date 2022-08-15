import React from 'react';


const Card = ({ city, country,time , averageTemp, expect, icon, wind, humidity, sunrise, sunset, Card }) => {
    
  return (
    <div className='card-container'>
        <div className='card-header'>
          <h1>{city}</h1> <p>{country}</p>
          <h5>{time}</h5>
          <h2>Average Temp: {averageTemp}&deg;C</h2>
          <h2 className='expect'><img src={icon} alt=""/>{expect} </h2>                       
        </div>
        <hr/>
        <div className='extra-info'>
          <h3>Wind: {wind} kph</h3>
          <h3>Humidity: {humidity}</h3>       
          <h3>Sunrise: {sunrise}</h3>
          <h3>Sunset: {sunset}</h3>
        </div>
    </div>
  )
}

export default Card