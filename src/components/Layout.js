import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="app_layout">
      <Header />
      <main className="container py-4 mb-5">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
