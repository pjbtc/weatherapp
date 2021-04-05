import React from 'react';
import {Card} from 'react-bootstrap';

const WeatherCard = ({dt, temp_min, temp_max, current, icon}) => {
  // create a date object with Date class constructor
  const date = new Date(dt);
  return (
    <Card style={{width: '18rem'}}>
      <Card.Img
        variant="top"
        // get the src from example url and pass the icon prop for icon code
        src={`//cdn.weatherapi.com/weather/64x64/day/116.png      `}
      />
      <Card.Body>
        <Card.Title>{current}</Card.Title>
        {/*  datetime is received in milliseconds, let's turn into local date time */}
        <p>
          {date.toLocaleDateString()} - {date.toLocaleTimeString()}
        </p>
        {/* minimum temperature */}
        <p>Min: {temp_min}</p>
        {/* maximum temperature */}
        <p>Max: {temp_max}</p>
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;