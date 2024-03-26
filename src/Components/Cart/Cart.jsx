import React, { useEffect } from 'react'
import './cart.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../Slice/ProductsSlice';
import { addBasket, decrease, removeBasket } from '../../Slice/BasketSlice';
import { Button, Col, Input, Row } from 'antd';
import { Link } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const basket = useSelector(state => state.basket.items);
  const totalPrice = useSelector(state => state.basket.totalPrice.toFixed(2));


  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleaddBasket = (item) => {
    dispatch(addBasket(item))
  }
  const handleDecrease = (item) => {
    dispatch(decrease(item))
  }
  const handleRemoveBasket = (item) => [
    dispatch(removeBasket(item))
  ]

  return (

    <div className='cart'>
      <div className="page-heading">
        <div className="container">
          <h1>Cart</h1>
          <Link to="/home" id='home'>Home</Link>
          <span>/</span>
          <Link>Cart</Link>
        </div>
      </div>
      <div className="container">
        {basket.length > 0 && (
          <>
            <div className='cart-table'>
              <table>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {basket && basket.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <img src={item.image} alt="" />
                      </td>
                      <td>{item.name}</td>
                      <td>${item.price.toFixed(2)}</td>
                      <td>
                        <div className='quantity'>
                          <button onClick={() => handleDecrease(item)}>-</button>
                          <span className="count">
                            {item.count}
                          </span>
                          <button onClick={() => handleaddBasket(item)}>+</button>
                        </div>
                      </td>
                      <td>${(item.price * item.count).toFixed(2)}</td>
                      <td>
                        <button onClick={() => handleRemoveBasket(item)} className='removeBtn'>x</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Row>
              <Col xs={24} sm={24} md={12}>
                <div className="cart-buttons">
                  <button className='btn'>Update Cart</button>
                  <button className='btn-outline'>Continue Shopping</button>
                </div>
                <div>
                  <div className="cart-coupon">Coupon</div>
                  <p>Enter your coupon code if you have one.</p>
                </div>
                <Row>
                  <Col xl={18} lg={12} md={12} xs={24}>
                    <input className='btn-outline' placeholder='Coupon Code' />
                  </Col>
                  <Col xl={6} lg={12} md={10} xs={12}>
                    <button className='btn'>Apply coupon</button>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} sm={24} md={7}>
                <h3>CART TOTALS</h3>
                <div className="subtotal">
                  <p>Subtotal</p>
                  <h4>${totalPrice}</h4>
                </div>
                <div className="subtotal">
                  <p>Total</p>
                  <h4>${totalPrice}</h4>
                </div>
                <button className='btn mt'> Proceed to Checkout</button>
              </Col>
            </Row>
          </>
        )}
        {basket.length == 0 && (
          <p>Cart is Empty!</p>
        )}
      </div>
    </div>
  )
}

export default Cart