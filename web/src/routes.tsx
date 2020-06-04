import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import CreatePoints from "./pages/CreatePoints";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route exact component={Home} path="/" />
      <Route exact component={CreatePoints} path="/create-point" />
    </BrowserRouter>
  );
};

export default Routes;
