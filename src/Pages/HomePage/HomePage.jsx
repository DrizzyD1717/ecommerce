import React, { useContext } from "react";
import { products } from "../../data";
import "./homePage.css";
import cartIcon from "../../assets/images/icon-add-to-cart.svg";
import { cartContext } from "../../Components/CartContext";

const HomePage = () => {
  const { addToCart, cartItems, removeFromCart, setNewAmount } =
    useContext(cartContext);
  return (
    <div className="homePageOverall">
      <h2>Desserts</h2>
      <div className="allProducts">
        {products.map((product, index) => {
          const id = index + 1;
          return (
            <div className="individualProducts" key={index}>
              <img src={product.image.desktop} alt="" />
              {cartItems[id] > 0 ? (
                <div className="moreThanOne">
                  <button className="add" onClick={() => addToCart(id)}>
                    +
                  </button>
                  <input
                    type="text"
                    value={cartItems[id]}
                    onChange={(e) => setNewAmount(id, e.target.value)}
                  />
                  <button className="reduce" onClick={() => removeFromCart(id)}>
                    -
                  </button>
                </div>
              ) : (
                <button onClick={() => addToCart(id)} className="toCart">
                  <img src={cartIcon} alt="" className="addToCartIcon" />
                  <span>Add To Cart</span>
                </button>
              )}

              <p className="category">{product.category}</p>
              <h4 className="productName">{product.name}</h4>
              <p className="price">${product.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;

// import React, { useContext } from "react";
// import { products } from "../../data";
// import "./homePage.css";
// import cartIcon from "../../assets/images/icon-add-to-cart.svg";
// import { cartContext } from "../../Components/CartContext";

// const HomePage = () => {
//   const { addToCart } = useContext(cartContext);
//   return (
//     <div className="homePageOverall">
//       <h2>Desserts</h2>
//       <div className="allProducts">
//         {products.map((product, index) => {
//           const id = index + 1;
//           return (
//             <div className="individualProducts" key={index}>
//               <img src={product.image.desktop} alt="" />
//               <button onClick={() => addToCart(id)} className="toCart">
//                 <img src={cartIcon} alt="" className="addToCartIcon" />
//                 <span>Add To Cart</span>
//               </button>
//               <div className="moreThanOne">
//                 <button className="add">+</button>
//                 <input type="text" />
//                 <button className="reduce">-</button>
//               </div>
//               <p className="category">{product.category}</p>
//               <h4 className="productName">{product.name}</h4>
//               <p className="price">${product.price}</p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default HomePage;
