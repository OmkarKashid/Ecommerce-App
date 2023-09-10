import { Link } from "react-router-dom";
import "../styles/ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card" key={product.id}>
      <Link to={"/products/" + product.id} style={{ textDecoration: "none" }}>
        <img className="product-img" src={product.image} alt="product"></img>
      </Link>
      <h5 className="product-card-rating">
        ★ {product.rating.rate} ({product.rating.count})
      </h5>
      <Link to={"/products/" + product.id} style={{ textDecoration: "none" }}>
        <h4 className="product-card-title">{product.title}</h4>
      </Link>
      <h4 className="product-card-price">${product.price}</h4>
    </div>
  );
}

export default ProductCard;
