import React from 'react';
import './Banner.css';
import { Col, Container } from 'react-bootstrap';
import imageBanner from '../../images/image-5.png'

const Banner = () => {
    return (
        <Container className="slider">
            <div>
                <div className="caption">
                    <h6 style={{ color: "#061A3A" }} className="depression-solution fw-bold">The World’s Smallest Quadcopter</h6>
                    <h1 style={{ color: "#FFCA2C" }}>Elomus F18 Drone 3 Auto</h1>
                    <p style={{ color: "#061A3A" }}> Newest Hover Function, Elomus F18 Drone 3 Auto Quadcopter UFO With 2Mp Wifi Camera!</p>
                    <button className="button"><small>SHOP NOW</small></button>
                </div>
            </div>
            <div>
                <img className="pt-5 mt-3" src={imageBanner} alt="" />
            </div>
        </Container>
    );
};

export default Banner;