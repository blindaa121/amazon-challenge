import './Header.css';
import React from 'react'

import {Link} from 'react-router-dom';
import { useStateValue } from "../../StateProvider";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { auth } from '../../firebase';

function Header() {
    const [{basket, user}, dispatch] = useStateValue();
    const handleAuthentication = () => {
      if (user) {
        auth.signOut();
      }
    }
    const greetingName = () => {
        if (!user) {
        return 'Guest';
      } else {
        return user.email.split('@')[0];
      }
    }

    return (
      <div className="header">
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </Link>

        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__nav">
              
          <div  className="header__option">
            <span className="header__optionLineOne">Hello, {greetingName()}</span>
            <Link className="header__link" to={!user && '/login'}>
              <span onClick={handleAuthentication} className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
            </Link>
          </div>

          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <Link className="header__link" to="/orders">
              <span className="header__optionLineTwo">& Orders</span>
            </Link>
          </div>

          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>

          <Link className="header__link" to="/checkout">
            <div className="header__optionBasket">
              <ShoppingCartIcon />
              <span className="header__optionLineTwo header__basketCount">
                {basket.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    );
}

export default Header
