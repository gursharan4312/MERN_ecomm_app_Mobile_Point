import React, { useEffect } from "react";
import Hero from "../Hero";
import Products from "../Products";

export default function ProductsPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const slides = [
    {
      img: "img/background.jpg",
      center: {
        h1: "Products"
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
