import React, { useState, useEffect } from "react";
import styles from "./Cart.module.css";
import { connect } from "react-redux";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";

import {
  removeAllFromCart
} from "../../redux/Shopping/shopping-actions";

const Cart = ({ cart, removeAllFromCart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);


  return (
    <div className={styles.cart}>
      <div className={styles.cart__items}>
        {cart.length > 0 ? cart.map((item) => (
          <CartItem key={item.id} item={item} />
        )) : <div className={styles.empty__cart} >
          No se ha agregado ningún platillo a la orden.
        </div>}
      </div>

      <div className={styles.cart__summary}>
        <h4 className={styles.summary__title}>Resumen de la orden</h4>
        <div className={styles.summary__price}>
          <span>TOTAL: ({totalItems} items)</span>
          <span>Lps. {totalPrice}</span>
        </div>
        <Link to="/">
          <button className={styles.summary__checkoutBtn} onClick={() => removeAllFromCart()} >
            Proceder con el pago
          </button>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeAllFromCart: (id) => dispatch(removeAllFromCart(id)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Cart);
