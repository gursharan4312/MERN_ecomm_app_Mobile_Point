import React, { useState, useReducer, useEffect } from "react";
// import Axios from "axios";
import cartReducer from "./reducers/cartReducer";
import productReducer from "./reducers/productsReducer";
import { storeProducts } from "./data";

const ProductContext = React.createContext();

export const ProductProvider = props => {
  let emptyProduct = {
    id: -1,
    title: "",
    img: "",
    price: 0,
    company: "",
    info: "",
    inCart: false,
    count: 0,
    total: 0
  };
  const [products, dispatchCartProducts] = useReducer(productReducer, [
    emptyProduct
  ]);
  const [cart, dispatchCart] = useReducer(cartReducer, []);

  const [detailProduct, setDetailProduct] = useState(emptyProduct);
  const [modal, setModal] = useState(false);

  const getProduct = (array, id) => {
    return array.find(item => item.id === id);
  };

  const changeDetailProduct = id => {
    setDetailProduct(getProduct(products, id));
  };
  const checkInCart = product => cart.find(item => item.id === product.id);

  const addToCart = id => {
    dispatchCart({
      type: "ADD_ITEM",
      payload: checkInCart(getProduct(products, id))
        ? getProduct(cart, id)
        : getProduct(products, id)
    });
    dispatchCartProducts({
      type: "ADD_CART",
      payload: getProduct(products, id)
    });
  };

  const removeItem = id => {
    dispatchCart({
      type: "REMOVE_ITEM",
      payload: checkInCart(getProduct(products, id))
        ? getProduct(cart, id)
        : getProduct(products, id)
    });
    dispatchCartProducts({
      type: "REMOVE_CART",
      payload: getProduct(products, id)
    });
  };

  const removeItemAll = id => {
    dispatchCart({
      type: "CLEAR_ITEM",
      payload: checkInCart(getProduct(products, id))
        ? getProduct(cart, id)
        : getProduct(products, id)
    });
    dispatchCartProducts({
      type: "REMOVE_CART",
      payload: getProduct(products, id)
    });
  };

  const clearCart = () => {
    dispatchCart({ type: "CLEAR_CART" });
    dispatchCartProducts({
      type: "EMPTY_CART"
    });
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    let tempProducts = [
      ...storeProducts.map(item => {
        return { ...item };
      })
    ];
    dispatchCartProducts({ type: "ADD_PRODUCTS", payload: tempProducts });
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        detailProduct,
        changeDetailProduct,
        cart,
        clearCart,
        addToCart,
        removeItem,
        removeItemAll,
        modal,
        toggleModal
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
