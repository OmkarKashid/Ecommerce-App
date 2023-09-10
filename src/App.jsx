import { store } from "./store/store";
import { Provider } from "react-redux";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import ShortDesc from "./components/ShortDesc";
import ProductCategories from "./components/ProductCategories";
import Footer from "./components/Footer";
import "./styles.css";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <ShortDesc />
        <ProductCategories />
        <Carousel />
        <Footer />
      </div>
    </Provider>
  );
}
