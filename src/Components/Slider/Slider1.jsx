import React from 'react';
import { Carousel } from 'antd';
import './slider.css';

const Slider1 = () => {
    const onChange = (currentSlide) => {
    };
    return (
        <div className='slider'>
            <Carousel afterChange={onChange} >
                <>
                    <div className='slide-context slide1'>
                        <div className="slide-text container">
                            <h3 className='slider-title'>The New Way To Display Product by
                                <a href="#">Colorlib</a>
                            </h3>
                            <button>Explore Now</button>
                        </div>
                    </div>
                </>
                <>
                    <div className='slide-context slide2'></div>
                </>
            </Carousel>
        </div>
    );
};

export default Slider1;
