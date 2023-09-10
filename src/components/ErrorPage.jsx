import Header from "./Header";
import Footer from "./Footer";

export default function ErrorPage() {
  function disableSetCart() {}
  return (
    <div className="errorPage">
      <Header cart={[]} setCart={disableSetCart} />
      <div>Ohe Dear! We Couldn't find the Page :(</div>
      <Footer />
    </div>
  );
}