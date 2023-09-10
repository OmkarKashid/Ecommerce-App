import "../../styles/CartStatusIcon.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CartStatusIcon() {

  const count = useSelector(state => state.cart.totalItems);
  return (
    <div className="cart-status-icon">
      <Link to="/cart">
      <img src="../icons8-shopping-cart-100.png" alt="shopping cart"></img>
      {count > 0 && <span className="cart-status-count">{count > 0 && count}</span>}
      </Link>
    </div>
  );
}
export default CartStatusIcon;