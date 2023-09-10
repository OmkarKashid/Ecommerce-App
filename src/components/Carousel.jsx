import "../styles/Carousel.css";
import { useState } from "react";
import { useGetAllProductsQuery } from "../features/products/productsApi";
import { Link } from "react-router-dom";

export const Carousel = () => {
  let [imgIndex, setImgIndex] = useState(0);
  let newImgIndex = imgIndex;

  const {
    data: products = [],
    isLoading,
    isFetching,
    isError,
    error
  } = useGetAllProductsQuery();

  function handleNextClick() {
    if (newImgIndex < 4) {
      newImgIndex += 1;
      setImgIndex(newImgIndex);
    } else {
      newImgIndex = 0;
      setImgIndex(newImgIndex);
    }
  }
  function handlePrevClick() {
    if (newImgIndex > 0) {
      newImgIndex -= 1;
      setImgIndex(newImgIndex);
    } else {
      newImgIndex = 4;
      setImgIndex(newImgIndex);
    }
  }
  if (isLoading || isFetching) {
    return <div>loading...</div>;
  }

  if (isError) {
    console.log({ error });
    return <div>{error.status}</div>;
  }

  return (
    <div className="carousel">
      <div className="carousel-title">Trending Right Now</div>
      <div className="carousel-content">
        <div className="carousel-flex">
          <button className="carousel-btn" onClick={() => handlePrevClick()}>
            &lt;
          </button>
          <Link
            to={"/products/" + products[newImgIndex].id}
            style={{ textDecoration: "none" }}
          >
            <img
              className="carousel-img"
              src={products[newImgIndex].image}
              alt="product"
            ></img>
          </Link>
          <button className="carousel-btn" onClick={() => handleNextClick()}>
            &gt;
          </button>
        </div>
        <Link
          to={"/products/" + products[newImgIndex].id}
          style={{ textDecoration: "none" }}
        >
          <div className="carousel-text">{products[newImgIndex].title}</div>
        </Link>
      </div>
    </div>
  );
};
export default Carousel;
