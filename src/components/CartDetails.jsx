import { useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseProductCount,
  decreaseProductCount
} from "../features/cart/cartSlice";
import "../styles/CartDetails.css";

function CartDetails({ cart }) {
  const dispatch = useDispatch();
  return (
    <div className="cart-products-container">
      {cart.products.map((product) => {
        return (
          <div className="cart-product">
            <img
              className="cart-product-img"
              src={product.product.image}
              alt={product.product.title}
            />
            <div>
              <h5 className="cart-product-title">{product.product.title}</h5>
              <p className="cart-product-rating">
                ★ {product.product.rating.rate} ({product.product.rating.count})
              </p>
              <p>Price: $ {product.price}</p>
              <button
                onClick={() =>
                  dispatch(removeFromCart({ productId: product.product.id }))
                }
              >
                Remove
              </button>
            </div>
            <div>
              <button
                className="increase-btn"
                onClick={() =>
                  dispatch(
                    increaseProductCount({ productId: product.product.id })
                  )
                }
              >
                +
              </button>
              <h5 className="cart-product-count">{product.count}</h5>
              <button
                className="decrease-btn"
                onClick={() =>
                  dispatch(
                    decreaseProductCount({ productId: product.product.id })
                  )
                }
              >
                -
              </button>
            </div>
            <div>Total Item Cost : $ {product.count * product.price}</div>
          </div>
        );
      })}
      <div className="cart-products-total">
        <h4>Total Items: {cart.totalItems}</h4>
        <h4>SubTotal: $ {cart.totalCost.toFixed(2)}</h4>
      </div>
    </div>
  );
}

export default CartDetails;
