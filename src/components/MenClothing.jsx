import Header from "./Header";
import Footer from "./Footer";
import ProductCard from "./ProductCard";
import { useGetMenClothingProductsQuery } from "../features/products/productsApi";
import "../styles/Category.css";

export default function MenClothing() {
  const {
    data: menClothingProducts = [],
    isLoading,
    isFetching,
    isError,
    error
  } = useGetMenClothingProductsQuery();

  if (isLoading || isFetching) {
    return <div>loading...</div>;
  }

  if (isError) {
    console.log({ error });
    return <div>{error.status}</div>;
  }

  return (
    <>
      <Header />
      <div className="category-header">Men Clothing</div>
      <div className="category">
        {menClothingProducts.map((product) => {
          return <ProductCard product={product} />;
        })}
      </div>
      <Footer />
    </>
  );
}
