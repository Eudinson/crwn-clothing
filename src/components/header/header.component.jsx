import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utility';
import './header.styles.scss';
import { useSelector } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const Header = () => {

    // const currentUserState = useSelector(state => state)
    const currentUser = selectCurrentUser(useSelector(state => state))

    // const cartShowHideState = useSelector(state => state)
    const cartShowHide = selectCartHidden(useSelector(state => state))

    return (
        <div className="header">
            <Link to="/">
                <div className="logo-container">
                    <span>Demo Shop</span>
                </div>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/contact">
                    CONTACT
                </Link>
                {
                    currentUser ?
                        <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                        :
                        <Link className="option" to="/signin">SIGN IN</Link>
                }
                <CartIcon />
            </div>
            {!cartShowHide && <CartDropdown />}
        </div>
    )
}

export default Header;