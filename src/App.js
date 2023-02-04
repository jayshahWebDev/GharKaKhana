import React from "react";
import ReactDOM from "react-dom/client";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import RestaurantsList from "./components/RestaurantsList";
import RestaurantListShimmer from "./components/Shimmer/RestaurantListShimmer";

const App = () => {
  return (
    <>
      <Navbar />
      {/* <Carousel /> */}
      <RestaurantsList />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
