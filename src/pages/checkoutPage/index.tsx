import React from "react";
//redux
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "src/store";
// import { deleteCart } from "src/store/cart/action";

//rtk
import { RootState } from "src/store";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { deleteItem } from "src/store/cart/cartSlice";

// import components
import Header from "../../components/templates/header";
import Footer from "../../components/templates/footer";

interface type {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
}

export default function CheckoutPage() {
  const dispatch = useAppDispatch();
  const { products, pcs, totalAmount } = useAppSelector((store: RootState) => store.cart);

  return (
    <div>
      <Header />
      <br />
      <div style={{ textAlign: "center", fontSize: "2.4rem" }}> Check Out! </div>
      <br />
      {products.length >= 1 ? (
        products.map((v: type, i: number) => (
          <div key={i} style={{ textAlign: "center", width: "100%" }}>
            <div
              style={{
                backgroundColor: "#ffffff",
                width: "1024px",
                margin: "0 auto",
              }}
            >
              <img src={v.image} style={{ width: "400px", height: "400px" }} alt={"prod-img"} />
              <br />
              상품명: {v.title}
              <br />
              가격: {v.price} <button onClick={() => dispatch(deleteItem(v))}>X</button>{" "}
            </div>
          </div>
        ))
      ) : (
        <div style={{ textAlign: "center", fontSize: "2rem", fontWeight: "600" }}> 장바구니를 채워주세요! </div>
      )}

      <br />

      <div style={{ textAlign: "center", width: "100%" }}>
        <div
          style={{ backgroundColor: "#ced4da", width: "1024px", margin: "0 auto", padding: "10px", color: "#f8f8f8" }}
        >
          ✔ 총 수량: <span style={{ fontSize: "1.2rem" }}>{pcs}</span>개 <br />
          <br />
          <div>
            합계: <span style={{ fontSize: "1.2rem" }}>{totalAmount}</span>원
          </div>
          <br />
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => {
              alert(`${pcs}개의 상품 합계는 ${totalAmount}원 입니다.`);
            }}
          >
            PAYMENT
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
