import React from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer";

import HomePage from "./components/pages/HomePage";
import ProductsPage from "./components/pages/ProductsPage";
import ProductsCategoryPage from "./components/pages/ProductsCategoryPage";
import DetailsPage from "./components/pages/DetailsPage";
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
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
      <Modal />
      <Footer />
    </div>
  );
}

export default App;
