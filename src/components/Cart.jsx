import Header from "./Header";
import CartDetails from "./CartDetails";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import "../styles/Cart.css";

function Cart() {
  const cart = useSelector((state) => state.cart);
  if (cart.totalItems < 1) {
    return (
      <>
        <Header />
        <h4 className="cart-header">Your Cart</h4>
        <div className="cart-empty-msg">Is Empty!</div>
        <Footer />
      </>
    );
  }
  return (
    <>
      <Header />
      <h4 className="cart-header">Your Cart</h4>
      <CartDetails cart={cart} />
      <Footer />
    </>
  );
}
export default Cart;
