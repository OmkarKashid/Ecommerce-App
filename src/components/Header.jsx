import LogoTitle from "./LogoTitle";
import Search from "./Search";
import Navigation from "./Navigation";
import CartStatusIcon from "../features/cart/CartStatusIcon";
import "../styles/Header.css";

function Header(props) {
  return (
    <div className="header">
      <Navigation />
      <LogoTitle />
      <CartStatusIcon />
      <Search />
    </div>
  );
}
export default Header;