import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navigation.css";

function Navigation() {
  let [showNavigation, setShowNavigation] = useState(false);
  function handleNavigation() {
    let updatedShowNavigation = !showNavigation;
    setShowNavigation(updatedShowNavigation);
  }
  if (showNavigation) {
    return (
      <div>
        <button className="nav-close-btn" onClick={() => handleNavigation()}>
          ✕
        </button>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Categories</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/">Info</Link>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <button className="nav-show-btn" onClick={() => handleNavigation()}>
        ≡
      </button>
    );
  }
}

export default Navigation;
