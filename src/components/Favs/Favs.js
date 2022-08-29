import React from "react";
import styles from "../Products/Products.module.css" //"./Favs.css";

import { connect } from "react-redux";

import FavItem from "../Favs/FavItem/FavItem";

const Fav = ({ fav }) => {

  return (
    <div >
      <div className={styles.products}>

        {fav.length > 0 ? fav.map((item) => (
          <FavItem key={item.id} item={item} />
        )) : <div className={styles.empty__fav} >
          No se ha agregado ningún platillo a favoritos.
        </div>}

      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fav: state.shop.fav,
  };
};

export default connect(mapStateToProps)(Fav);


















/*import React from "react";
import { Link } from "react-router-dom";
import styles from "./Favs.css";

// Redux
import { connect } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
} from "../../redux/Shopping/shopping-actions";

const Favs = ({ product, addToCart, loadCurrentItem }) => {
  return (
    <div className={styles.product}>
      HELLO WORLD!
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Favs);*/
