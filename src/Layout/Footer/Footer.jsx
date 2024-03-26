import React from 'react';
import { Col, Row } from 'antd';
import { HeartFilled } from '@ant-design/icons';
import '../../App.css'
import './footer.css'

const Footer = () => (
    <footer className='container'>
        <Row>
            <Col xs={24} sm={24} md={24} lg={8} xl={4}>
                <ul>
                    <li><p className='footer-title'>Help</p></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">Account</a></li>
                    <li><a href="#">Shipping</a></li>
                    <li><a href="#">Returns</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </Col>
            <Col xs={24} sm={24} md={24} lg={16} xl={4}>
                <ul>
                    <li><p className='footer-title'>About</p></li>
                    <li><a href="">About us</a></li>
                    <li><a href="">Press</a></li>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Team</a></li>
                    <li><a href="">FAQ</a></li>
                </ul>
            </Col>
            <Col xs={24} sm={24} md={24} lg={8} xl={4}>
                <ul>
                    <li><p className='footer-title'>Shop</p></li>
                    <li><a href="">Store</a></li>
                    <li><a href="">Gift Cards</a></li>
                    <li><a href="">Student Discount</a></li>
                </ul>
            </Col>
            <Col xs={24} sm={24} md={24} lg={16} xl={12}>
                <ul>
                    <li>
                        <p className='footer-title'>Join our list and receive exclusives</p>
                    </li>
                    <li>
                        <Row>
                            <Col xs={12} sm={18} md={18}>
                                <input type="email" name='email' placeholder='Email address' />
                            </Col>
                            <Col xs={12} sm={6} md={6}>
                                <button>Subscribe</button>
                            </Col>
                        </Row>
                    </li>
                </ul>
            </Col>
        </Row>
        <Row>
            <Col className='copyright'>
                <p>Copyright ©2024 All rights reserved | This template is made with
                    <span className='heart'>
                        <HeartFilled />
                    </span>
                    <span style={{ display: "inline-block" }}>by</span>
                    <span className='author'> Aygun</span>
                </p>
            </Col>
        </Row>
    </footer>
);

export default Footer;