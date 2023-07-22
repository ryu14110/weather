import React from 'react';
import { Button } from 'react-bootstrap';

function WeatherButton({cities, setCity, handleCityChange, selectedCity}) {
  // console.log('cities?',cities);
  return (
    <div>
      <Button variant={`${selectedCity == null ? "outline-primary" : "primary"}`} onClick={()=>handleCityChange('changwon')}>Current Location</Button>
      {/* <Button variant="primary">Paris</Button>{' '}
      <Button variant="primary">New York</Button>{' '}
      <Button variant="primary">Seoul</Button>{' '} */}
      {cities.map((city)=>(
      //   <Button variant="primary" key={index} onClick={()=>setCity(item)} >{item}</Button>
      // ))}
      <Button variant={`${selectedCity == city ? "outline-primary" : "primary"}`} onClick={()=>handleCityChange(city)}>{city}</Button>
      ))}
    </div>
  );
}

export default WeatherButton;
