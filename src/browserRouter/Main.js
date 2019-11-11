import React from "react";

import { Route, Switch } from "react-router-dom";

import AddProduct from "./AddProduct";
import Home from "./Home";
import About from "./About";
import Table from "./Table";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/About" component={About} />
    <Route path="/Table" component={Table} />
    <Route path="/AddProduct" component={AddProduct} />
  </Switch>
);

export default Main;
