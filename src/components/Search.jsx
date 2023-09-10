import "../styles/Search.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Search() {
  const [keyword, setKeyword] = useState("");

  return (
    <div className="search">
      <input
        type="text"
        className="search-input"
        placeholder="Search Products..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      ></input>
      <Link to={"/search/" + keyword}>
        <button className="search-btn">➜</button>
      </Link>
    </div>
  );
}

export default Search;
