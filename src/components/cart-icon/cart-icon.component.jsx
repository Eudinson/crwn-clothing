import React from 'react';
import { ReactComponent as ShoppingICon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = () => {

    const cartItems = useSelector(state => state)
    const itemCount = selectCartItemsCount(cartItems)

    const dispatch = useDispatch()

    return (
        <div className="cart-icon" onClick={ () => dispatch(toggleCartHidden()) }>
            <ShoppingICon className="shopping-icon" />
            <span className="item-count">{ itemCount }</span>
        </div>
    )
}

export default CartIcon;