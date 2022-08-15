import React from 'react'

const HourCard = ({hourData}) => {
  return (
    <div className='hour-card'>
      <h2>{hourData.time}</h2>
      <h3>Feels Like: {hourData.feelslike_c}&deg;C</h3>
      <h3><img src={hourData.condition.icon} alt="condition icon"/> {hourData.condition.text}</h3>
      <hr/>
      <h3>wind: {hourData.wind_kph} kph</h3>
      <h3>wind chill: {hourData.windchill_c}&deg;C</h3>
    </div>
  )
}

export default HourCard