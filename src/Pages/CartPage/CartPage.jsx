import React, { useContext } from "react";
import { products } from "../../data";
import { cartContext } from "../../Components/CartContext";
import "./cartPage.css";
import remove from "../../assets/images/icon-remove-item.svg";
import OrderConfirmed from "../OrderConfirmed/OrderConfirmed";

const CartPage = () => {
  const { cartItems, deleteFromCart, getTotalCartAmount, toggleModal, modal } =
    useContext(cartContext);
  const totalAmount = getTotalCartAmount();

  // const confirmOrder = () => {
  //   return <OrderConfirmed></OrderConfirmed>;
  // };

  return (
    <div className="cartPageOverall">
      <h2 className="header">Your Cart</h2>
      {products.map((product, index) => {
        const id = index + 1;
        if (cartItems[id] !== 0) {
          return (
            <div className="products">
              <div key={index} className="">
                <h3>{product.name}</h3>
                <div className="priceAndAmount">
                  <p className="numberOfProducts">{cartItems[id]}x</p>
                  <p className="productPrice">${product.price}</p>
                  <p>${product.price * cartItems[id]}</p>
                </div>
              </div>
              <div className="removeFromCart">
                <button onClick={() => deleteFromCart(id)}>
                  <img src={remove} alt="delete from cart" />
                </button>
              </div>
            </div>
          );
        }
      })}
      <div className="totalCartPrice">
        <p>Order Total</p>
        <div className="totalPrice">${totalAmount}</div>
      </div>
      <button className="confirmOrder" onClick={() => toggleModal()}>
        Confirm Order
      </button>
      {modal ? <OrderConfirmed></OrderConfirmed> : ""}
    </div>
  );
};

export default CartPage;

// import React, { useContext } from "react";
// import { products } from "../../data";
// import { cartContext } from "../../Components/CartContext";
// import "./cartPage.css";
// import remove from "../../assets/images/icon-remove-item.svg";
// import OrderConfirmed from "../OrderConfirmed/OrderConfirmed";

// const CartPage = () => {
//   const {
//     cartItems,
//     removeFromCart,
//     deleteFromCart,
//     getTotalCartAmount,
//     OrderConfirmed,
//   } = useContext(cartContext);
//   const totalAmount = getTotalCartAmount();

//   // const confirmOrder = () => {
//   //   return <OrderConfirmed></OrderConfirmed>;
//   // };

//   return (
//     <div className="cartPageOverall">
//       <h2 className="header">Your Cart</h2>
//       {products.map((product, index) => {
//         const id = index + 1;
//         if (cartItems[id] !== 0) {
//           return (
//             <div className="products">
//               <div key={index} className="">
//                 <h3>{product.name}</h3>
//                 <div className="priceAndAmount">
//                   <p className="numberOfProducts">{cartItems[id]}x</p>
//                   <p className="productPrice">${product.price}</p>
//                   <p>${product.price * cartItems[id]}</p>
//                 </div>
//               </div>
//               <div className="removeFromCart">
//                 <button onClick={() => deleteFromCart(id)}>
//                   <img src={remove} alt="delete from cart" />
//                 </button>
//               </div>
//             </div>
//           );
//         }
//       })}
//       <div className="totalCartPrice">
//         <p>Order Total</p>
//         <div className="totalPrice">${totalAmount}</div>
//       </div>
//       <button className="confirmOrder">Confirm Order</button>
//     </div>
//   );
// };

// export default CartPage;
