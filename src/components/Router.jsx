import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import ErrorPage from "./ErrorPage";
import SearchResults from "./SearchResults";
import MenClothing from "./MenClothing";
import WomenClothing from "./WomenClothing";
import Jewelery from "./Jewelery";
import Electronics from "./Electronics";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />
    },
    {
      path: "/search/:keyword",
      element: <SearchResults />
    },
    {
      path: "/search/",
      element: <SearchResults />
    },
    {
      path: "/menClothing",
      element: <MenClothing />
    },
    {
      path: "/womenClothing",
      element: <WomenClothing />
    },
    {
      path: "/jewelery",
      element: <Jewelery />
    },
    {
      path: "/electronics",
      element: <Electronics />
    },
    {
      path: "/products/:id",
      element: <ProductDetails />
    },
    {
      path: "/cart",
      element: <Cart />
    }
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
