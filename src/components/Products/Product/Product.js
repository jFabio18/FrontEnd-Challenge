import React from "react";
import { Link } from "react-router-dom";
import styles from "./Product.module.css";

// Redux
import { connect } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
  addToFav,
  updProducts,
} from "../../../redux/Shopping/shopping-actions";

//imagenes
import white_heart from '../../../images/heart-icon.png';
import red_heart from '../../../images/heart.png';

const Product = ({ product, addToCart, loadCurrentItem, addToFav, updProducts }) => {

  function onClick(productId) {
    addToFav(productId);
    updProducts(productId);
  }

  return (

    <div className={styles.product}>
      <img
        className={styles.product__image}
        src={product.image}
        alt={product.title}
      />

      <div className={styles.product__details}>
        <p className={styles.details__title}>{product.title}</p>
        <p className={styles.details__desc}>{product.description}</p>
        <p className={styles.details__price}>Lps. {product.price}</p>
      </div>

      <div className={styles.product__buttons}>
        <Link to={`/product/${product.id}`}>
          <button
            onClick={() => loadCurrentItem(product)}
            className={`${styles.buttons__btn} ${styles.buttons__view}`}
          >
            Ver detalle
          </button>
        </Link>
        <button
          onClick={() => addToCart(product.id)}
          className={`${styles.buttons__btn} ${styles.buttons__add}`}
        >
          Ordenar
        </button>
        <button className={styles.fav__button}
          onClick={() => onClick(product.id, product.favorite)}
          title={`${product.favorite === "true" ? "Quitar de favoritos" : "Agregar a favoritos"}`} >
          <img id="button_fav_img"
            className={styles.fav__button_img}
            src={`${product.favorite === "true" ? red_heart : white_heart}`}
            alt="Favorito"
          />
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
    addToFav: (id) => dispatch(addToFav(id)),
    updProducts: (id) => dispatch(updProducts(id))
  };
};

export default connect(null, mapDispatchToProps)(Product);
