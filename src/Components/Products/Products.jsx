// ProductList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './products.css'
import { PiMinusLight } from "react-icons/pi";
import { Col, Row } from 'antd';
import { fetchCategories } from '../../Slice/ProductsSlice';
import { addBasket } from '../../Slice/BasketSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductList = () => {
    const dispatch = useDispatch();
    const productlist = useSelector(state => state.categories.items);
    const basket = useSelector(state => state.basket.items);
    const loading = useSelector(state => state.categories.loading)

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);
    const notify = () => toast.success(<>Product is successfully added to Cart!</>);

    const handleaddBasket = (item) => {
        dispatch(addBasket(item))
        notify()
    }
    return (
        <div className="container">
            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition:Bounce
                toastClassName="custom-toast"
            />
            
            <div className='productList'>
                {loading ? (
                   <svg viewBox="25 25 50 50">
                   <circle r="20" cy="50" cx="50"></circle>
                 </svg>
                ) : (
                    <Row>
                        {productlist.map(product => (
                            <Col sm={24} md={12} lg={8} key={Number(product.id)}>
                                <div className="card-inner">
                                    <div className="card">
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
                                        <div className="img">
                                            <div className='image-box'>
                                                <img src={product.image} alt={product.name} />
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <p>{product.name}</p>

                                            <div className="card-end">
                                                <div>
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
                                                <button onClick={() => handleaddBasket(product)}>add</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                )}


            </div>
        </div>

    );
};

export default ProductList;
