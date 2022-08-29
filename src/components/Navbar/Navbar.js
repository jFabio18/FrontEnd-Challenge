import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { connect } from "react-redux";
import Menu_img from '../../images/menu.png';
import Fav_img from '../../images/heart.png';
import cart_img from '../../images/shopping_cart.png';

const Navbar = ({ cart, fav }) => {
  const [cartCount, setCartCount] = useState(0);
  
  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);


  //******Favoritos******
  const [FavCount, setFavCount] = useState(0);

  useEffect(() => {
    let fav_count = 0;
    fav.forEach((item) => {
      fav_count += item.qty;
    });

    setFavCount(fav_count);
  }, [fav, FavCount]);

  //******favoritos******


  return (
    <div className={styles.navbar}>
      <Link to="/">
        <h2 className={styles.navbar__logo}>Challenge Frontend</h2>
      </Link>
      <div className={styles.navbar__options}> {/*menu options*/}

      <div className={styles.navbar__menu}>
          <Link to="/">
            <div className={styles.navbar__cart}>
              <h3 className={styles.navbar__menu__title}>Ver Menú</h3>
              <img
                className={styles.cart__image}
                src={Menu_img}
                alt="Menu"
              />
            </div>
          </Link>
        </div>
        <div>
          <Link to="/Favs">
            <div className={styles.navbar__cart}>
              <h3 className={styles.cart__title}>Favoritos</h3>
              <img
                className={styles.cart__image}
                src={Fav_img}
                alt="Fav_img"
              />
              <div className={styles.cart__counter}>{FavCount}</div>
            </div>
          </Link>
        </div>
        <div className={styles.navbar__options}>
          <Link to="/cart">
            <div className={styles.navbar__cart}>
              <h3 className={styles.cart__title}>Ver orden</h3>
              <img
                className={styles.cart__image}
                src={cart_img}
                alt="shopping cart"
              />
              <div className={styles.cart__counter}>{cartCount}</div>
            </div>
          </Link>
        </div>
      </div> {/*menu options*/}
    </div >
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
    fav: state.shop.fav,
  };
};

export default connect(mapStateToProps)(Navbar);
