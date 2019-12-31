import React from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductsCategoryPage from "./pages/ProductsCategoryPage";
import DetailsPage from "./pages/DetailsPage";
import SpecialDeals from "./pages/SpecialDeals";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container-fluid p-0">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/products/:category" component={ProductsCategoryPage} />
          <Route exact path="/products" component={ProductsPage} />
          <Route path="/details/:id" component={DetailsPage} />
          <Route path="/promotions" component={SpecialDeals} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
      <Modal />
      <Footer />
    </div>
  );
}

export default App;
