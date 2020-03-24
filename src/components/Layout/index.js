import React from "react";

const Layout = ({ children }) => (
  <div>
    <header>Welcome</header>
    <main>{children}</main>
  </div>
);

export default Layout;
