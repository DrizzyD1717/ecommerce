import React, { useContext } from "react";
import "./orderConfirmed.css";
import { cartContext } from "../../Components/CartContext";
import { products } from "../../data";
import greenLogo from "../../assets/images/icon-order-confirmed.svg";

const OrderConfirmed = () => {
  const { cartItems, getTotalCartAmount, clearWholeCart } =
    useContext(cartContext);
  const totalAmount = getTotalCartAmount();

  return (
    <div className="orderConfirmedOverall">
      <div className="finalProductsContainer">
        <img src={greenLogo} alt="" />
        <h2>Order Confirmed</h2>
        <p className="headerP">We hope you enjoy your food</p>
        <div className="finalProductsProducts">
          {products.map((product, index) => {
            const id = index + 1;
            if (cartItems[id] !== 0) {
              return (
                <div key={index} className="checkoutProductsContainer">
                  <div className="leftPart">
                    <div>
                      <img src={product.image.thumbnail} alt="" />
                    </div>
                    <div>
                      <h4>{product.name}</h4>
                      <div className="numberAndPrice">
                        <p className="number">{cartItems[id]}x</p>
                        <p className="price">${product.price}</p>
                      </div>
                    </div>
                  </div>
                  <div>${cartItems[id] * product.price}</div>
                </div>
              );
            }
          })}
          <div className="finalPrice">
            <p>Order Total</p>
            <h3>${totalAmount}</h3>
          </div>
        </div>
        <button onClick={() => clearWholeCart()}>Start New Order</button>
      </div>
    </div>
  );
};

export default OrderConfirmed;
