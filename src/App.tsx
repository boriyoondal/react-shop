import React, { useState } from "react";
import {css, Theme} from "@emotion/react";
// App

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { plusAction, minusAction, changeNameAction } from "./store/demo/action";

export default function App() {
  const dispatch = useDispatch();
  const { name, value } = useSelector((store: RootState) => store.demo);

  const [input, setInput] = useState("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onChangeName = () => {
    dispatch(changeNameAction(input));
  };

  const onPlus = () => {
    dispatch(plusAction());
  };

  const onMinus = () => {
    dispatch(minusAction());
  };

  return (
    <div css={Style.Container}>
      <div>
        <p>이름 : {name}</p>
        <input
          type="text"
          placeholder="이름 변경"
          value={input}
          onChange={onChangeInput}
        />
        <button onClick={onChangeName}>이름 변경</button>
      </div>
      <div>
        <p>숫자 : {value}</p>
        <button onClick={onPlus}>PLUS</button>
        <button onClick={onMinus}>MINUS</button>
      </div>
    </div>
  );
}

const Style = {
  Container: (theme: Theme) => css`
     background-color: #ddd;

     ${theme.mobile}{
       background-color: ${theme.black};
     }
  `,
  Body: css`
    color: tomato;
  `,
}
