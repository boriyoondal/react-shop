//redux
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store";
import { clearCart, deleteCart } from "src/store/cart/action";
//css
import { css } from "@emotion/react";

export default function CartItem() {
  //@redux
  const dispatch = useDispatch();

  //localStorage에 저장된 상태의 products 목록을 가져오기
  const { products } = useSelector((store: RootState) => store.cart);

  return (
    <div>
      <div style={{ marginBottom: "1.6rem", fontSize: "1.6rem" }}> ✅ SHOPPING CART</div>
      {products.length >= 1 ? (
        products.map((v, i) => (
          <div key={i} css={Style.DivStyle}>
            <img src={v.image} style={{ width: 100, height: 100 }} alt={"prod-img"} />
            <br />
            상품명 : {v.title}
            <br />
            <br />
            {v.price}원
            <br />
            <br />
            <button css={Style.btnStyle} onClick={() => dispatch(deleteCart(v))}>
              X
            </button>{" "}
            <br />
          </div>
        ))
      ) : (
        <div> 장바구니가 비어있습니다 </div>
      )}
      <br />
      <button css={Style.btnStyle} style={{ padding: "1rem", fontSize: "1rem" }} onClick={() => dispatch(clearCart())}>
        장바구니 비우기
      </button>
    </div>
  );
}

const Style = {
  DivStyle: css`
    padding: 1rem;
    background-color: #f5f5f5;
    margin-bottom: 1.6rem;
    border: 1px solid #808080;
  `,

  btnStyle: css`
    margin: 0;
    border: none;
    cursor: pointer;
    font-family: "Noto Sans KR", sans-serif;
    font-size: var(--button-font-size, 1rem);
    padding: var(--button-padding, 12px 12px);
    border-radius: var(--button-radius, 8px);
    background: var(--button-bg-color, #78c2ad);
    color: var(--button-color, #ffffff);

    &:active,
    &:hover,
    &:focus {
      background: var(--button-hover-bg-color, #78c2ad);
    }

    &:disabled {
      cursor: default;
      opacity: 0.5;
      background: var(--button-bg-color, #78c2ad);
    }

    --button-font-size: 0.875rem;
    --button-padding: 8px 12px;
    --button-radius: 4px;
  `,
};
