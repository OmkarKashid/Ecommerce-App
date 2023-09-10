import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useGetAllProductsQuery } from "../features/products/productsApi";
import "../styles/SearchResults.css";

function SearchResults() {
  const { data: products = [] } = useGetAllProductsQuery();
  const { keyword } = useParams();
  const searchRegex = new RegExp(`${keyword}`, "gi");
  let results = products.filter((product) => searchRegex.test(product.title));

  if (results.length === 0) {
    results = "No Products Found :(";
  } else {
    results = results.map((result) => (
      <div className="result" key={result.id}>
        <Link to={"/products/" + result.id} style={{ textDecoration: "none" }}>
          <img className="result-img" src={result.image} alt={result.title} />
        </Link>
        <div>
          <Link
            to={"/products/" + result.id}
            style={{ textDecoration: "none" }}
          >
            <h5 className="result-title">{result.title}</h5>
          </Link>
          <p className="result-rating">
            ★ {result.rating.rate} ({result.rating.count})
          </p>
          <p>Price: $ {result.price}</p>
        </div>
      </div>
    ));
  }
  return (
    <>
      <Header />
      <h4 style={{ textAlign: "center" }}>Search Results for {keyword}</h4>
      <div className="results-container">{results}</div>
      <Footer />
    </>
  );
}

export default SearchResults;
