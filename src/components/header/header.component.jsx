import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utility';
import './header.styles.scss';
import { useSelector } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const Header = () => {

    const [toggle, setToggle] = useState(false);
    let [windowSize, setWindowSize] = useState('');

    const setToggleState = () => {
        setToggle(toggleState => !toggleState)
    }

    const toggleMenu = () => {
        return !toggle ? 'options' : 'options toggleMenu'
    }

    window.addEventListener('resize', () => {
        setWindowSize(winSize => winSize = window.innerWidth)
    })

    window.addEventListener('load', () => {
        setWindowSize(winSize => winSize = window.innerWidth)
    })

    // const currentUserState = useSelector(state => state)
    const currentUser = selectCurrentUser(useSelector(state => state))

    // const cartShowHideState = useSelector(state => state)
    const cartShowHide = selectCartHidden(useSelector(state => state))

    return (
        <div className="header">
            <Link to="/">
                <div className="logo-container">
                    <span className="logo">Demo Shop</span>
                </div>
            </Link>
            <div className={toggleMenu()}>
                <Link className="option" to="/" onClick={setToggleState}>
                    MENU
                </Link>
                <Link className="option" to="/shop" onClick={setToggleState}>
                    SHOP
                </Link>
                {
                    currentUser ?
                        <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                        :
                        <Link className="option" to="/signin" onClick={setToggleState}>SIGN IN</Link >
                }
                <div onClick={setToggleState}>
                    {windowSize <= 900 ? <Link to='/checkout'> <CartIcon /> </Link> : <CartIcon />}
                </div>
            </div>
            {!cartShowHide && <CartDropdown />}
            <div className="cart-icon-mobile">
                <CartIcon />
            </div>
            <div className="burger" onClick={setToggleState}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div>
    )
}

export default Header;