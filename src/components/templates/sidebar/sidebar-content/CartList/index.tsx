import React from "react";
import CartItem from "../CartItem";

export default function CartList() {
  return (
    <div>
      <div style={{ marginBottom: "1.6rem", fontSize: "1.6rem" }}> ✅ SHOPPING CART</div>
      <CartItem />
    </div>
  );
}
