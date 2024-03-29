import React, { useEffect, useContext, useState } from "react";
import BestSellers from "../components/BestSellers";
import ProductContext from "../context";

export default function SpecialDeals() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { mobileDeals, accessoryDeals, fetch } = useContext(ProductContext);
  const [loadingMobileDeals, setloadingMobileDeals] = useState(
    mobileDeals.length < 1 ? true : false
  );
  const [loadingAccessoryDeals, setloadingAccessoryDeals] = useState(
    accessoryDeals.length < 1 ? true : false
  );
  useEffect(() => {
    if (mobileDeals.length < 1) fetch("mobileDeals");
    if (accessoryDeals.length < 1) fetch("accessoryDeals");
    setTimeout(() => {
      if (mobileDeals.length >= 1) setloadingMobileDeals(false);
      if (accessoryDeals.length >= 1) setloadingAccessoryDeals(false);
    }, 3000);
  }, [mobileDeals, accessoryDeals]);

  return (
    <>
      <div className="text-center my-4">
        <h3 className="text-uppercase">special Deals on Mobiles</h3>
        {loadingMobileDeals ? (
          <div
            style={{ height: "200px" }}
            className="d-flex justify-content-center"
          >
            <h4 className="d-inline-block mx-4">Loading</h4>
            <div className="loader "></div>
          </div>
        ) : (
          <BestSellers products={mobileDeals} />
        )}
      </div>
      <div className="text-center my-4">
        <h3 className="text-uppercase">special Deals on Accessories</h3>
        {loadingAccessoryDeals ? (
          <div
            style={{ height: "200px" }}
            className="d-flex justify-content-center"
          >
            <h4 className="d-inline-block mx-4">Loading</h4>
            <div className="loader "></div>
          </div>
        ) : (
          <BestSellers products={accessoryDeals} />
        )}
      </div>
    </>
  );
}
