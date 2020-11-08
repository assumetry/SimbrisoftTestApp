import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import style from './HomePage.module.css'

const HomePage = (props) => {
    return (<>

        <Container>
            <Row>
                <Col className={style.greetings}>
                    Please do allow our web app to have your geolocation in order to<br />
                    calculate your coordinates and you will have your Weather-info in no time!
                </Col>

            </Row>
        </Container>
    </>
    );
}

export default HomePage;
