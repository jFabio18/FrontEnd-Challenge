import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "Pollo a la plancha con vegetales",
      description:
        "Prueba nuestro delicioso pollo a la plancha con los vegetales mas frescos y al mejor precio.",
      price: 150.0,
      image:
        "https://www.recetasconpollo.org/wp-content/uploads/2019/12/filete-pechuga-pollo-plancha--512x341.jpg",
      favorite: "false",
    },
    {
      id: 2,
      title: "Hamburguesa Clásica",
      description:
        "Una porción de carne y tu elección de queso americano, suizo o cheddar. Servida con mayonesa, lechuga, tomate, pepinillos y cebolla roja.",
      price: 200.0,
      image:
        "https://assets.unileversolutions.com/recipes-v2/218401.jpg?imwidth=900",
      favorite: "false",
    },
    {
      id: 3,
      title: "Espaguetis",
      description:
        "Prueba nuestros deliciosos espaguetis con salsa alfredo, camarones y perejil.",
      price: 150.0,
      image:
        "https://www.recetasderechupete.com/wp-content/uploads/2019/12/Linguine-con-salsa-Alfredo-768x527.jpg",
      favorite: "false",
    },
    {
      id: 4,
      title: "Huevos divorciados",
      description:
        "Dos huevos estrellados cocinados a tu gusto, bañados con salsa ranchera y salsa verde.",
      price: 150.0,
      image:
        "https://dam.cocinafacil.com.mx/wp-content/uploads/2021/02/huevos-divorciados.jpg",
      favorite: "false",
    },
    {
      id: 5,
      title: "Baleadas",
      description:
        "Las mejores baleadas del mercado, tortilla recién hecha, agucate fresco, huevo, frijoles y mantequilla.",
      price: 20.0,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS706Axi-6j3GDCV-Qq8aKLuJWIGSjDjDGw3A&usqp=CAU",
      favorite: "false",
    },
  ],
  cart: [],
  fav: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  let favorite_state = 'true';

  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Crea item desde el arreglo de productos
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Verifica si el producto ya esta en el carrito
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + 1 }
              : item
          )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.REMOVE_ALL_FROM_CART:
      alert("Pago realizado con éxito");
      return {
        ...state,
        cart: [],
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };

    //Inicio favoritos
    case actionTypes.ADD_TO_FAV:

      console.log("entra a ADD_TO_FAV.");

      // obtener data del item desde el arreglo de productos
      const item_fav = state.products.find((product) => product.id === action.payload.id);
      // Verifica si el producto ya esta en favoritos
      const inFav = state.fav.find((item_fav) => item_fav.id === action.payload.id ? true : false);

      return {
        ...state,
        fav: inFav ?
          state.fav.filter((item) => item.id !== action.payload.id) //si ya existe en favoritos lo elimino
          : [...state.fav, { ...item_fav, favorite: 'true', qty: 1 }], // si no existe lo agrego a favoritos

      };
    case actionTypes.REMOVE_FROM_FAV:
      return {
        ...state,
        fav: state.fav.filter((item) => item.id !== action.payload.id),
      };

    case actionTypes.UPD_PRODUCTS:

      const ProductFav = state.fav.find((item_fav) => item_fav.id === action.payload.id ? true : false);

      return {

        ...state,
        fav: ProductFav ?
          favorite_state = 'true' : favorite_state = 'false',

        ...state,
        products: state.products.map((item) =>
          item.id === action.payload.id
            ? { ...item, favorite: favorite_state }
            : item
        ),

      };

    //fin favoritos

    default:
      return state;
  }
};

export default shopReducer;
