import React from 'react';
import CitySelector from './components/CitySelector';
import './App.css';
import {Container} from 'react-bootstrap';
import UseFetch from './hooks/UseFetch';
import {API_KEY, API_BASE_URL} from './apis/config'
import WeatherList from './components/WeatherList';

const App = () => {
  const {data, error, isLoading, setUrl} = UseFetch();
  

  // error handling and loading
  const getContent = () => {
    if(error) return <h2>Error when fetching: {error}</h2>
    if(!data && isLoading) return <h2>LOADING...</h2>
    if(!data) return null;
    return <WeatherList weathers={data.list} />
  };

  return (
    <Container className="App">
      <CitySelector onSearch={(city) => setUrl(`http://api.weatherapi.com/v1/current.json?key=${API_KEY }&q=${city}`)} />

   {/* don't forget the change */}
   {getContent()}
    </Container>
  );
};

export default App;
