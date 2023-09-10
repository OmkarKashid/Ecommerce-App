import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../features/products/productsApi";
import Header from "./Header";
import Product from "./Product";
import Footer from "./Footer";

function ProductDetails() {
  const { id } = useParams();
  const {
    data: product = {},
    isLoading,
    isFetching,
    isError,
    error
  } = useGetProductByIdQuery(id);

  if (isLoading || isFetching) {
    return <div>loading...</div>;
  }

  if (isError) {
    console.log({ error });
    return <div>{error.status}</div>;
  }
  try {
    return (
      <>
        <Header />
        <Product product={product} />
        <Footer />
      </>
    );
  } catch {
    return (
      <>
        <Header />
        <div className="not-found">Product Not Found!</div>
        <Footer />
      </>
    );
  }
}
export default ProductDetails;