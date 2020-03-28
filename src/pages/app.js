import React from "react";
import { Router } from "@reach/router";
import Layout from "../components/Layout";
import PrivateRoute from "../components/PrivateRoute";
import Profile from "../components/Profile";
import Login from "../components/Login";
import { Auth0Provider } from "../react-auth0-spa";
import history from "../utils/history";
import { useAuth0 } from "../react-auth0-spa";

const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
  console.log("redirecting");
};

const App = () => {
  return (
    <Auth0Provider
      domain={process.env.AUTH0_DOMAIN}
      client_id={process.env.AUTH0_CLIENTID}
      redirect_uri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <Layout>
        <Router basepath="/app">
          <PrivateRoute path="/profile" component={Profile} />
          <Login path="/login" />
        </Router>
      </Layout>
    </Auth0Provider>
  );
};

export default App;
