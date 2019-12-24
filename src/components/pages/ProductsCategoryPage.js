import React from "react";
import Hero from "../Hero";
import Products from "../Products";

export default function ProductsPage(props) {
  let category = props.match.params.category;
  let slug = category === "mobile" ? "mobiles" : "accessories";
  const slides = [
    {
      img: "img/background.jpg",
      center: {
        h1: `${slug}`,
        h4: `Find best ${slug} here`
      }
    }
  ];
  return (
    <>
      <Hero slides={slides} />
      <div className="container">
        <Products category={category} />
      </div>
    </>
  );
}
