import React from "react";
import { Router } from "@reach/router";
import Layout from "../components/Layout";
import PrivateRoute from "../components/PrivateRoute";
import Profile from "../components/Profile";
import Login from "../components/Login";

const App = () => {
  return (
    <Layout>
      <Router basepath="/app">
        <PrivateRoute path="/profile" component={Profile} />
        <Login path="/login" />
      </Router>
    </Layout>
  );
};

export default App;
