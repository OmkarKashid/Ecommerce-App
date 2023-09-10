import Header from "./Header";
import Footer from "./Footer";
import ProductCard from "./ProductCard";
import { useGetElectronicsProductsQuery } from "../features/products/productsApi";
import "../styles/Category.css";

export default function MenClothing() {
  const {
    data: electronicsProducts = [],
    isLoading,
    isFetching,
    isError,
    error
  } = useGetElectronicsProductsQuery();

  if (isLoading || isFetching) {
    return <div>loading...</div>;
  }

  if (isError) {
    console.log({ error });
    return <div>{error.status}</div>;
  }

  return (
    <div className="electronics">
      <Header />
      <div className="category-header">Electronics</div>
      <div className="category">
        {electronicsProducts.map((product) => {
          return <ProductCard product={product} />;
        })}
      </div>
      <Footer />
    </div>
  );
}
