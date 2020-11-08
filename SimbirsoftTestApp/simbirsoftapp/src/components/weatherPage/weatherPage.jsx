import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import UserTime from './userTime/userTime';
import style from './weatherPage.module.css'

const WeatherPage = (props) => {
    // console.log(props);
    const iconUrl = "http://openweathermap.org/img/w/" + props.state.weather.icon + ".png"
    return (<>
        <Container className={style.container}>
            <Row>
                <Col sm={6}>
                    <UserTime userTime={props.state.userTime}/>
                    <h2>Weather for {props.state.cityName}</h2>
                    <div className={style.tempBlock}>
                        <h3>{props.state.main.temp}C° </h3>
                        <img src={iconUrl} alt={'weather icon'}/>
                        <span>{props.state.weather.main} </span>
                    </div>
                    <h5>Feels like {props.state.main.feels_like}, {props.state.weather.description}</h5>
                </Col>
                <Col sm={3}>
                    <p>Pressure {props.state.main.pressure}hPa</p>
                    <p>Humidity {props.state.main.humidity}%</p>
                    <p>Visibility {props.state.visibility}m</p>
                    <p>Wind speed {props.state.wind.speed}m/s</p>
                    <p>Wind direction {props.state.wind.deg}</p>
                </Col>
            </Row>
        </Container>
        {/* <div>
            <span>
                {props.state.userTime}
            </span>
            <h2>Weather for {props.state.cityName}</h2>
        </div>
        <div>
            <div>
                <span>{props.state.weather.main} </span>
                <span>{props.state.main.temp}C </span>
            </div>
            <div>
                <h5>Feels like {props.state.main.feels_like}, {props.state.weather.description}</h5>
            </div>
            <ul>
                <li>Pressure {props.state.main.pressure}hPa</li>
                <li>Humidity {props.state.main.humidity}%</li>
                <li>Visibility {props.state.visibility}</li>
                <li>some prop</li>
                <li>some prop</li>
            </ul>
        </div> */}
    </>
    );
}

export default WeatherPage;
