import React from 'react';
import { Col, Row } from 'react-bootstrap';
import '../AboutUs/AboutUs.css'

const AboutUs = () => {
    return (
        <div className="about text-success mt-5 container">
          
            <h2 className="text-center">About Khaja Tours</h2>
            <Row>
                <Col xs={12} lg={6}>
                    <div className="main-about mt-5 ">
                        <img className="w-100" src={`https://cdn.pixabay.com/photo/2017/12/16/22/22/bora-bora-3023437_1280.jpg`} alt="" />
                    </div>
                </Col>
                <Col xs={12} lg={6}>
                    <div className="about-content">
                        <p>Khaja travel is an private retailer agency service that provides travel and tourism-related services to the general public on behalf of accommodation or travel suppliers to offer different kinds of travelling packages for each destination.</p>
                    </div>
                </Col>
            
            
            </Row>
        </div>
    );
};

export default AboutUs;