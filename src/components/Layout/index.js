import React from "react";
import NavBar from "../Navbar";

const Layout = ({ children }) => (
  <div>
    <header>
      <NavBar />
    </header>
    <main>{children}</main>
  </div>
);

export default Layout;
