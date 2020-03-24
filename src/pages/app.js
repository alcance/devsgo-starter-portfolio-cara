import React from "react";
import { Router } from "@reach/router";
import Default from "../components/Default";
import Layout from "../components/Layout";
import Login from "../components/Login";

const App = () => {
  return (
    <Layout>
      <Router basepath="/app">
        <Login path="/login" />
        <Default path="/" />
      </Router>
    </Layout>
  );
};

export default App;
