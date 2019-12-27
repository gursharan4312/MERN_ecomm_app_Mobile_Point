import React, { useEffect, useContext } from "react";
import BestSellers from "../BestSellers";
import ProductContext from "../../context";

export default function SpecialDeals() {
  const { mobileDeals, accessoryDeals } = useContext(ProductContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="text-center my-4">
        <h3 className="text-uppercase">Deals on Mobiles</h3>
        <BestSellers products={mobileDeals} />
      </div>
      <div className="text-center my-4">
        <h3 className="text-uppercase">Deals on Accessories</h3>
        <BestSellers products={accessoryDeals} />
      </div>
    </>
  );
}
