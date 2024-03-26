import React from 'react'
import './infocard.css'
import '../../App.css'
import { CiDeliveryTruck } from "react-icons/ci";
import { GiAnticlockwiseRotation } from "react-icons/gi";
import { BsShieldLock } from "react-icons/bs";
import { Col, Row } from 'antd';

const InfoCard = () => {
    return (
        <div className='infoCard'>
            <div className="container">
                <Row>
                    <Col xs={24} sm={12} md={8}>
                        <div className="card card1">
                            <div className="icon">
                                <CiDeliveryTruck />
                            </div>
                            <h3>Worldwide Delivery</h3>
                            <p>Far far away, behind the word mountains, far from the countries.</p>
                        </div>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <div className="card card2">
                            <div className="icon">
                                <BsShieldLock />
                            </div>
                            <h3>SECURE PAYMENTS</h3>
                            <p>Far far away, behind the word mountains, far from the countries.</p>
                        </div>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <div className="card">
                            <div className="icon">
                                <GiAnticlockwiseRotation />
                            </div>
                            <h3>SIMPLE RETURNS</h3>
                            <p>Far far away, behind the word mountains, far from the countries.</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default InfoCard