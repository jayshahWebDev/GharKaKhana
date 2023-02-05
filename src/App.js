import React from "react";
import ReactDOM from "react-dom/client";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import RestaurantsList from "./components/RestaurantsList";
import RestaurantListShimmer from "./components/Shimmer/RestaurantListShimmer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RestaurantDetail from "./components/RestaurantDetail";

const App = () => {
  return (
    <>
      <Navbar />
      {/* <Carousel /> */}
      <RestaurantsList />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/restaurant/:name/:id",
    element: <RestaurantDetail />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
