import React, {useState, useEffect} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherBox from './components/WeatherBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherButton from './components/WeatherButton';
//1.앱이 실행되자마자 현재위치의 날씨가 보인다.
//2.도시별 섭씨,화씨 날씨 상태 정보가 보인다.
//3.5개의 버튼이 있다.(현재 위치 1개, 다른도시 4개)
//4.도시버튼을 클릭할 때마다 도시별 날씨가 보인다.
//5.현재 위치 기반 날씨버튼을 클릭하면 다시 현재위치 기반으로 돌아 온다.
//6.데이터가 도착하는 동안 로딩스피너가 돈다.

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('')
  const cities = ['paris','new york','tokyo','seoul'];
  const getCurrentLocation=()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      // console.log('현재위치',lat,lon)
      getWeatherByCurrentLocation(lat,lon);
    });
  }
const getWeatherByCurrentLocation =async(lat, lon)=>{
  let url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d2f210280346b675f6ee15391d492c2b&units=metric`
  // setLoading(true);
  let response = await fetch(url);
  let data = await response.json();
  // console.log('data',data);
  setWeather(data);
}
const getWeatherByCity=async()=>{
  let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d2f210280346b675f6ee15391d492c2b&units=metric`
  let response = await fetch(url);
  let data = await response.json();
  setWeather(data);
  // console.log("Data",data);
}
const handleCityChange = (city)=>{
  if(city === 'current'){
    setCity(null);
  }else{
    setCity(city);
  }
};

useEffect(()=>{
  if(city ==''){
    getCurrentLocation();
  }else{
    getWeatherByCity();
  }
  },[city]);

  return (
    <div>
      <div className='container'>
        <WeatherBox weather={weather}/>
        <WeatherButton cities={cities} setCity={setCity} handleCityChange={handleCityChange} selectedCity={city}/>
      </div>
    </div>
  );  
}

export default App;
