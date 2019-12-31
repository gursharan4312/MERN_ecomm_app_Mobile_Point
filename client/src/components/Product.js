import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ProductContext from "../context";

export default function Product(props) {
  const { id, img, title, price, inCart } = props.product;
  const values = useContext(ProductContext);
  const handelClick = id => {
    values.changeDetailProduct(id);
    values.toggleModal();
  };
  return (
    <ProductWrapper className="col-6  col-lg-3 col-md-4 my-3 mx-auto">
      <div className="card">
        <div className="img-container p-5">
          <Link to={`/details/${id}`}>
            <img
              src={`/${img}`}
              alt="product"
              className="card-img-top"
              onClick={() => values.changeDetailProduct(id)}
            />
          </Link>
        </div>
        <div className="button-container d-flex my-2">
          <button
            className="btn btn-warning"
            disabled={inCart}
            onClick={() => handelClick(id)}
          >
            {inCart ? "Added to cart" : "Add to cart"}
          </button>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <p className="align-self-center mb-0">{title}</p>
          <h5>
            <span>$</span>
            {price}
          </h5>
        </div>
      </div>
    </ProductWrapper>
  );
}

const ProductWrapper = styled.div`
  .card {
    border-color: #999;
    box-shadow: 0 0 0.5rem #999;
  }
  .card-footer {
    border-color: #999;
  }
  .img-container img {
    transition: all 0.5s linear;
  }
  .img-container:hover img {
    transform: scale(1.3, 1.3);
  }
  .button-container {
    justify-content: space-evenly;
  }
`;
