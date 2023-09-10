import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import "../styles/AddCartBtn.css";

function AddCartBtn({ product }) {
  const [itemCount, setItemCount] = useState(1);
  const dispatch = useDispatch();
  function decreaseItemCount() {
    if (itemCount > 1) {
      setItemCount((count) => count - 1);
    }
  }
  function increaseItemCount() {
    if (itemCount < 99) {
      setItemCount((count) => count + 1);
    }
  }
  function changeItemCount(e) {
    console.log(typeof e.target.value);
    let count = +e.target.value; //change string to number
    if (typeof count === "number" && count > 0 && count < 100) {
      setItemCount(count);
    }
  }

  return (
    <div className="add-cart">
      <div className="add-cart-value">
        <button
          className="add-cart-decrease"
          onClick={() => decreaseItemCount()}
        >
          -
        </button>
        <input
          type="number"
          value={itemCount}
          onChange={(e) => changeItemCount(e)}
        />
        <button
          className="add-cart-increase"
          onClick={() => increaseItemCount()}
        >
          +
        </button>
      </div>
      <div className="add-cart-btn">
        <button
          onClick={() =>
            dispatch(
              addToCart({
                product: product,
                count: itemCount,
                price: product.price
              })
            )
          }
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default AddCartBtn;
