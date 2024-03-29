import React, { useContext, useEffect } from "react";
import ProductContext from "../context";

export default function DetailsPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const values = useContext(ProductContext);
  let paramId = Number(props.match.params.id);
  const { id, img, title, company, price, info, inCart } =
    values.products.find(item => item.id === paramId) || values.products[0];
  return (
    <>
      <div className="row">
        <div className="col-10 mx-auto">
          <h1 className="heading">{title}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-10 col-md-4 mx-auto my-4">
          <img src={`/${img}`} alt="product" className="image-fluid" />
        </div>
        <div className="col-10 col-md-8 mx-auto my-4 py-4">
          <h2>Made by : {company}</h2>
          <h2>Price : ${price}</h2>
          <p className="text-capitalize font-weight-bold">
            Some Info About the product:
          </p>
          <p className="text-muted">{info}</p>
          <button
            className="btn btn-outline-info mx-2"
            onClick={() => window.history.back()}
          >
            go back
          </button>

          <button
            className="btn btn-warning"
            disabled={inCart}
            onClick={() => values.addToCart(id)}
          >
            {inCart ? "Added to cart" : "Add to cart"}
          </button>
        </div>
      </div>
    </>
  );
}
