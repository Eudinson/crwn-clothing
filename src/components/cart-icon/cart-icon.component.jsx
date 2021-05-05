import React from 'react';
import { ReactComponent as ShoppingICon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

const CartIcon = () => {
    return (
        <div className="cart-icon">
            <ShoppingICon className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    )
}

export default CartIcon;