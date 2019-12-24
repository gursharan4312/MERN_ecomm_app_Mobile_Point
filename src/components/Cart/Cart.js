import React, { useContext } from "react";
import Heading from "../styled-components/Heading";
import CartColoumns from "./CartColoumns";
import CartItem from "./CartItem";
import ProductContext from "../../context";
import CartTotals from "./CartTotals";

export default function Cart() {
  const values = useContext(ProductContext);
  const { cart } = values;
  return (
    <div>
      <Heading>Cart</Heading>
      {cart.length > 0 ? (
        <>
          <CartColoumns />
          <div className="container-fluid text-center">
            {cart.map(cartProduct => {
              return (
                <CartItem key={cartProduct.id} cartProduct={cartProduct} />
              );
            })}
            <CartTotals />
          </div>
        </>
      ) : (
        <Heading>Your Cart is Empty</Heading>
      )}
    </div>
  );
}
