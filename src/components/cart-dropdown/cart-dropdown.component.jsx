import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors'

const CartDropdown = () => {

    const cartItem = useSelector(state => state)
    const cartItems = selectCartItems(cartItem)

    return(
        <div className="cart-dropdown">
            <div className="cart-items"> 
                {
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                }    
            </div> 
                <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default CartDropdown