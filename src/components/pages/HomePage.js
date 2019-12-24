import React from "react";
import Hero from "../Hero";
import { Link } from "react-router-dom";
export default function HomePage() {
  const slides = [
    {
      img: "img/background.jpg",
      center: {
        h1: "Mobile Point",
        h4: "Get the best deals on you Mobile and Accessories today!",
        btn: {
          text: "View New Offers",
          to: "/"
        }
      }
    },
    {
      img: "img/background.jpg",
      center: {
        h1: "Winter Sale!!!",
        h4: "Get exclusive deals on your new device this winter",
        btn: {
          text: "View New Offers",
          to: "/"
        }
      }
    }
  ];
  return (
    <>
      <div className="row" style={{ maxWidth: "100%", margin: "0" }}>
        <Hero slides={slides} />
      </div>
      <div className="container">
        <div className="row my-4">
          <div className="col-10 col-md-4 mx-auto">
            <img src="/img/background.jpg" alt="mobile" className="img-fluid" />
          </div>
          <div className="col-10 col-md-8 mx-auto text-center py-4">
            <h2>Mobiles</h2>
            <p className="lead">Get the best deals on mobiles today</p>
            <Link to="/products/mobile">
              <button className="btn btn-primary">View New Devices</button>
            </Link>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-10 col-md-4 mx-auto d-block d-md-none">
            <img
              src="/img/background.jpg"
              alt="accessory"
              className="img-fluid"
            />
          </div>
          <div className="col-10 col-md-8 mx-auto text-center py-4">
            <h2>Accessories</h2>
            <p className="lead">
              Most affordable and quality mobile accessories available
            </p>
            <Link to="/products/accessory">
              <button className="btn btn-primary">
                View Mobile Accessories
              </button>
            </Link>
          </div>
          <div className="col-10 col-md-4 mx-auto d-none d-md-block">
            <img
              src="/img/background.jpg"
              alt="accessory"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </>
  );
}
