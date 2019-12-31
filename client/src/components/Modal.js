import React, { useContext } from "react";
import styled from "styled-components";
import ProductContext from "../context";

export default function Modal() {
  const values = useContext(ProductContext);
  const { id, title, img, price, inCart } = values.detailProduct;

  return values.modal ? (
    <ModalWrapper>
      <div className="container p-4">
        <div className="row">
          <div className="col-8 col-md-6 col-lg-4 mx-auto p-4 product-container">
            <h3>{title}</h3>
            <img className="img-fluid" src={`/${img}`} alt="product" />
            <p className="text-muted">Price: ${price}</p>
            <button
              onClick={values.toggleModal}
              className="mr-3 btn btn-outline-info"
            >
              close
            </button>
            <button
              disabled={inCart}
              onClick={() => values.addToCart(id)}
              className="btn btn-warning"
            >
              {inCart ? "Added to cart" : "Add to cart"}
            </button>
          </div>
        </div>
      </div>
    </ModalWrapper>
  ) : (
    ""
  );
}

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  text-align: center;
  z-index: 99;
  .product-container {
    background: #fff;
    border-radius: 5px;
  }
`;
