import Header from "./Header";
import Footer from "./Footer";
import ProductCard from "./ProductCard";
import { useGetJeweleryProductsQuery } from "../features/products/productsApi";
import "../styles/Category.css";

export default function MenClothing() {
  const {
    data: jewelaryProducts = [],
    isLoading,
    isFetching,
    isError,
    error
  } = useGetJeweleryProductsQuery();

  if (isLoading || isFetching) {
    return <div>loading...</div>;
  }

  if (isError) {
    console.log({ error });
    return <div>{error.status}</div>;
  }

  return (
    <div className="jewelary">
      <Header />
      <div className="category-header">Jewelary</div>
      <div className="category">
        {jewelaryProducts.map((product) => {
          return <ProductCard product={product} />;
        })}
      </div>
      <Footer />
    </div>
  );
}
