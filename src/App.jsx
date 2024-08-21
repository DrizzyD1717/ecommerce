import "./App.css";
import { CartContextProvider } from "./Components/CartContext";
import CartPage from "./Pages/CartPage/CartPage";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <div className="body">
      <CartContextProvider>
        <HomePage></HomePage>
        <CartPage></CartPage>
      </CartContextProvider>
    </div>
  );
}

export default App;
