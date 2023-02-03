import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <>
      <h1 className="text-[50px]">Hello From Parcel</h1>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
