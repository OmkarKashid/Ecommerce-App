import Header from "./Header";
import Footer from "./Footer";
import ProductCard from "./ProductCard";
import { useGetWomenClothingProductsQuery } from "../features/products/productsApi";
import "../styles/Category.css";

export default function WomenClothing() {
  const {
    data: womenClothingProducts = [],
    isLoading,
    isFetching,
    isError,
    error
  } = useGetWomenClothingProductsQuery();

  if (isLoading || isFetching) {
    return <div>loading...</div>;
  }

  if (isError) {
    console.log({ error });
    return <div>{error.status}</div>;
  }

  return (
    <div className="womenClothing">
      <Header />
      <div className="category-header">Women Clothing</div>
      <div className="category">
        {womenClothingProducts.map((product) => {
          return <ProductCard product={product} />;
        })}
      </div>
      <Footer />
    </div>
  );
}
