import React, { useState } from 'react';
import Card from './components/Card';
import HourCards from './components/HourCards';


function App() {
  const [city, setCity] = useState('');
  const [forecastData, setForecastData] = useState();
  const [location, setLocation] = useState();
  const [isEmpty, setIsEmpty] = useState(true);
  const [throwError, setThrowError] = useState(false);
  const [darkMode, setDarkMode] = useState(false)

  // this fetches all the data
  // throws error 'failed to fetch' on error
  const fetchWeather = (count) => {
     fetch(`https://api.weatherapi.com/v1/forecast.json?key=7c705c2b62b543b98ea54922221606&q=${city}&days=3&aqi=no&alerts=no`)
       .then(res => {
        if(!res.ok){
          throw Error("failed to fetch data");
        }
        return res.json();
      })
       .then(data => {
        setForecastData(data.forecast.forecastday[count]);
        setLocation(data.location);
        setIsEmpty(false);
        setThrowError(false);
       })
       .catch(err =>{ 
        setThrowError(true);
        console.log(err)
      })
   };
 
  return (
    <div className={`App ${!isEmpty && 'auto'} ${darkMode && 'dark-mode'}`}>
      <button onClick={() => setDarkMode(!darkMode)}
             className={`toggle-btn ${darkMode && 'dark-mode'}`}>
        {darkMode ? 'Dark Mode': 'Light Mode'}
      </button>
      <div className='input-container'>       
        <input
          type="text"
          required
          placeholder="write your city here"
          value={city}
          onChange={e => setCity(e.target.value)}
          />
        <button onClick={() => fetchWeather(0)} className={`${darkMode && 'dark-mode'}`}>search</button>
              
      </div> 
      {isEmpty ? <h1 className='isEmpty'>Type In City...</h1>: 
      throwError ? <h1 className='isEmpty'>failed to fetch data...</h1>:
      <div className='main-container'>        
        <Card averageTemp={forecastData && forecastData.day.avgtemp_c}
              expect={forecastData && forecastData.day.condition.text}
              icon={forecastData && forecastData.day.condition.icon}
              wind={forecastData && forecastData.day.maxwind_kph}
              humidity={forecastData && forecastData.day.avghumidity}
              sunrise={forecastData && forecastData.astro.sunrise}
              sunset={forecastData && forecastData.astro.sunset}
              city={location && location.name} 
              country={location && location.country} 
              time={location && location.localtime}
              />

        <div className='btn-container'>
          <button onClick={() =>  fetchWeather(0)} className={`${darkMode && 'dark-mode'}`}>
            Today
          </button>
          <button onClick={() => fetchWeather(1)} className={`${darkMode && 'dark-mode'}`}>
            Tomorrow
          </button>
          <button onClick={() =>  fetchWeather(2)} className={`${darkMode && 'dark-mode'}`}>
            Day After Tomorrow
          </button>
        </div>        

        <hr/>
        <HourCards data={forecastData && forecastData.hour}/>      
      </div>
      }
    </div>
  );
}

export default App;
