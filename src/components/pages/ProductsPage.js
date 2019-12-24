import React from "react";
import Hero from "../Hero";
import Products from "../Products";

export default function ProductsPage(props) {
  const slides = [
    {
      img: "img/background.jpg",
      center: {
        h1: "Products",
        h4: "Find best products here"
      }
    }
  ];
  return (
    <>
      <Hero slides={slides} />
      <div className="container">
        <Products />
      </div>
    </>
  );
}
