import React from 'react';
import './checkout.styles.scss';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import { Link } from 'react-router-dom'
import { selectCurrentUser } from '../../redux/user/user.selectors';

const CheckoutPage = () => {

    const currentUser = selectCurrentUser(useSelector(state => state))
    const cartItems = selectCartItems(useSelector(state => state))
    const total = selectCartTotal(useSelector(state => state))

    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Sub Total</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
            }
            <div className="total">
                <span>TOTAL: ${total}</span>
            </div>
            {

                !currentUser ? 
                <Link className="option" to="/signin" style={{color:'red', borderBottom:'1px solid red'}}>Please click here sign in to your account.</Link> 
                :
                total === 0
                ?
                <div className="test-warning-container">
                    <h3>Your Cart in empty</h3>
                    <Link to='/shop'>
                        <span className="go-to-shop">Go to shop</span>
                    </Link>
                </div>
                    :
                <div className="test-warning-container">
                    <div className="test-warning">
                        *Please use the following test credit card for payments*
                        <br />
                        4242 4242 4242 4242 - Exp: 01/23 - CVV: 4242
                        </div>
                    <StripeCheckoutButton price={total} />
                </div>
            }
        </div>
    )
}

export default CheckoutPage;