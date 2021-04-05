import React, {useState} from 'react';
import {Row, Col, FormControl, Button} from 'react-bootstrap';
//import {API_KEY, API_BASE_URL} from '../apis/config';

const CitySelector = ({onSearch}) => {
  const [city, setCity] = useState(''); // initial value as empty string
 // const [results, setResults] = useState(null);

 /* const onSearch = () => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=<API_KEY>&q=${city}&q=${city}`)
      .then((response) => response.json())
        //update result 
        //.then((result)=> console.log(result))
      .then((results) => setResults(results));
  };
  
  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      onSearch();
    }
  };
  */
  return (
    <div>
      <Row>
        <Col>
          <h1>Search your city</h1>
        </Col>
      </Row>

      <Row>
        {/* xs={4} takes the one third  of the page*/}
        <Col xs={4} className="text-center">
          <FormControl
            placeholder="Enter city"
            // update city value with the user's input
            onChange={(event) => setCity(event.target.value)}
            // value will be the currently selected city
            value={city}
           // onKeyDown={onKeyDown}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          {/* event handler for button click */}
         {/*  <Button onClick={onSearch} >Check Weather</Button>*/}
         <Button onClick={()=>onSearch(city)}>check Weather</Button>
        </Col>
      </Row>
    </div>
  );
};

export default CitySelector;