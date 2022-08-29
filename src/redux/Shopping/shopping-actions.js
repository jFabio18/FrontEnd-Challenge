import * as actionTypes from "./shopping-types";

//Compras
export const addToCart = (itemID) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const removeAllFromCart = (itemID) => {
  return {
    type: actionTypes.REMOVE_ALL_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const adjustItemQty = (itemID, qty) => {
  return {
    type: actionTypes.ADJUST_ITEM_QTY,
    payload: {
      id: itemID,
      qty,
    },
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  };
};

//Favoritos
export const addToFav = (itemID) => {
  return {
    type: actionTypes.ADD_TO_FAV,
    payload: {
      id: itemID,
    },
  };
};

export const removeFromFav = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_FAV,
    payload: {
      id: itemID,
    },
  };
};

export const updProducts = (itemID, favorite) => {
  return {
    type: actionTypes.UPD_PRODUCTS,
    payload: {
      id: itemID,
      favorite,
    },
  };
};

