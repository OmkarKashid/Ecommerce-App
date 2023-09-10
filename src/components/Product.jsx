import AddCartBtn from "./AddCartBtn";
import "../styles/Product.css";

function Product({ product }) {
  if (product === null) {
    return (
      <>
        <div className="not-found">Product Not Found!</div>
      </>
    );
  }
  return (
    <div className="product-container">
      <div className="product-img-container">
        <img
          src={product.image}
          className="product-img"
          alt={product.title}
        ></img>
      </div>
      <div className="product-text">
        <h4 className="product-title">{product.title}</h4>
        <h5 className="product-rating">
          ★ {product.rating.rate} ({product.rating.count})
        </h5>
        <h4 className="product-price">$ {product.price}</h4>
        <p className="product-description">{product.description}</p>
      </div>
      <div>
        <AddCartBtn product={product} />
      </div>
    </div>
  );
}

export default Product;
