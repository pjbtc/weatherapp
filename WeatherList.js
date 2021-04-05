import React from 'react'
import { Col, Row } from 'react-bootstrap'
import WeatherCard from './WeatherCard'

const WeatherList = ({weathers}) => {
    return (
        <Row>
           {weathers.map(({dt, current, weather}) => (
                <Col key={dt}>
                    <WeatherCard 
                    temp_max={current.temp_d} 
                    temp_min={current.temp_f} 
                   
                    
                  />
                </Col>
            ))} 
        </Row>
    )
}

export default WeatherList;