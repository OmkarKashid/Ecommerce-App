import { Link } from "react-router-dom";
import "../styles/ProductCategories.css";
import CategoryCard from "./CategoryCard";

function ProductCategories(props) {
  let categories = [
    "Men's Clothing",
    "Women's Clothing",
    "Jewelery",
    "Electronics"
  ];

  return (
    <>
      <h4 className="category-header">Shop By Categories</h4>
      <div className="productCategories">
        {categories.map((category, index) => {
          return (
            <div key={index} className="category">
              <Link
                to={
                  index === 0
                    ? "menClothing"
                    : index === 1
                    ? "womenClothing"
                    : index === 2
                    ? "jewelery"
                    : "electronics"
                }
                style={{ textDecoration: "none" }}
              >
                <CategoryCard category={{ title: category }} />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default ProductCategories;
