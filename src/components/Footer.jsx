import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-links">
          <Link className="footer-link" to="/">
            Home
          </Link>

          <Link className="footer-link" to="/">
            About US
          </Link>

          <Link className="footer-link" to="/">
            All Products
          </Link>
        </div>
        <div className="footer-text">
          All rights reserved to SuperCool Shopping 2022
        </div>
      </div>
    </footer>
  );
}

export default Footer;