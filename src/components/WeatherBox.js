import React from 'react';


function WeatherBox({weather}) {
  // console.log('data?',weather)
  return (
    <div className='weather-box'>
      {/* <div>{weather && weather.name}</div> */}
      <div className='city-color'><h3>{weather?.name}</h3></div>
      <h1>{Math.floor(weather?.main.temp)}C / {Math.floor(weather?.main.temp*((9/5)+32))}F</h1>
      <h2 className='des-color'>{weather?.weather[0].description}</h2>
      <h3>Hum {weather?.main.humidity}%</h3>
    </div>
  )
}

export default WeatherBox;
