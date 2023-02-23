import React from "react";
// Layout
import Header from "src/components/templates/header";
import Footer from "src/components/templates/footer";
import Body from "src/components/templates/body";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Main() {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
