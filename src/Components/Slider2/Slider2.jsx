import React, { useRef } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useSelector } from 'react-redux';
import { PiMinusLight } from "react-icons/pi";
import './slider2.css'

const Slider2 = () => {
    const productlist = useSelector(state => state.categories.items);
    let sliderRef = useRef(null);
    function SampleNextArrow(props) {
        const { className, onClick } = props;
        return (
            <div
                className={className}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, onClick } = props;
        return (
            <div
                className={className}
                onClick={onClick}
            />
        );
    }
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 568,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='carousel'>
            <div className="container">
                <Slider ref={slider => {
                    sliderRef = slider;
                }}
                    {...settings}>

                    {productlist && productlist.map(product => (
                        <div className="card" key={product.id}>
                            {product.infonew && (
                                <div className="info">
                                    {product.infonew}
                                </div>
                            )}
                            {product.infosale && (
                                <div className="info sale">
                                    {product.infosale}
                                </div>
                            )}

                            <img src={product.image} alt={product.name} />
                            <div className="card-body">
                                <p>{product.name}</p>
                                {product.prevprice && (
                                    <>
                                        <span>
                                            <del> £{product.prevprice}.00 </del>
                                        </span>
                                        <span><PiMinusLight /></span>
                                    </>
                                )}
                                <span>£{product.price}.00</span>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Slider2