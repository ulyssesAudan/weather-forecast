import React from 'react';
import HourCard from './HourCard';


const HourCards = ({data}) => {
  
  // this is for the hours data that doenst take in anything with the index of 4 or below
  // i tried to put it in a state, made it not change when i click tomorrow
  const newArr = data.filter(item => data.indexOf(item ) > 4)

  return (
    <div className='hour-cards-container'>
      <h1>Weather For The Day</h1>
      
      {newArr.map(item => <HourCard hourData={item} key={item.time}/>)}
    </div>    
  
  )
}

export default HourCards