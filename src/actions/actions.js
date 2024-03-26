// actions.js
import axios from 'axios';

export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const ADD_TO_CART = 'ADD_TO_CART';

export const fetchProductsSuccess = (products) => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products,
});

export const addToCartSuccess = (product) => ({
    type: ADD_TO_CART,
    payload: product,
});

export const fetchProducts = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:3001/products');
            dispatch(fetchProductsSuccess(response.data));
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };
};

export const addToCart = (item) => {
    return async (dispatch, getState) => {
        try {
            const state = getState();
            const storage = JSON.parse(localStorage.getItem("basket")) || [];
            const existingIndex = state.cart.cartItems.findIndex(cartItem => cartItem.id === item.id);
            if (existingIndex >= 0) {
                state.cart.cartItems[existingIndex].count += 1;
                localStorage.setItem("basket", JSON.stringify(state.cart.cartItems));
            } else {
                const newItem = {
                    ...item,
                    count: 1
                };
                state.cart.cartItems.push(newItem);
                localStorage.setItem("basket", JSON.stringify(state.cart.cartItems));
            }
            dispatch(addToCartSuccess(item));
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    };
};
