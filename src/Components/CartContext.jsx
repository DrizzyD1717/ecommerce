import { createContext, useState } from "react";
import { products } from "../data";

export const cartContext = createContext();

const defaultCartItems = () => {
  let cart = {};
  for (let i = 1; i < products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(defaultCartItems());
  const [modal, setmodal] = useState(false);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find((product) => product.idd === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }

    return totalAmount;
  };

  const toggleModal = () => setmodal(!modal);

  const clearWholeCart = () => {
    setmodal(!modal);
    setCartItems(defaultCartItems());
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems[itemId]);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const deleteFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] = 0) }));
  };

  const setNewAmount = (itemId, amount) => {
    setCartItems((prev) => ({ ...prev, [itemId]: amount }));
  };

  const contextValue = {
    addToCart,
    removeFromCart,
    deleteFromCart,
    setNewAmount,
    getTotalCartAmount,
    toggleModal,
    clearWholeCart,
    modal,
    cartItems,
  };

  return (
    <cartContext.Provider value={contextValue}>
      {props.children}
    </cartContext.Provider>
  );
};
