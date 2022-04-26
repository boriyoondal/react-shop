import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//redux
// import { useDispatch, useSelector } from "react-redux";
// import { loginRequestAction } from "src/store/login/action";
//rtk
import { useAppDispatch, useAppSelector } from "src/store/cart/hooks";
import { loginRequest } from "src/store/login/loginSlice";
import { RootState } from "src/store";
//css
import { css } from "@emotion/react";
import { Theme } from "@emotion/react";
//libs
import isLoginCheck from "src/libs/isLoginCheck";
//import components
import Footer from "src/components/templates/footer";
import Header from "src/components/templates/header";
import Spinner from "src/components/spinner/spinner";

export default function Login() {
  const { logInLoading, id } = useAppSelector((store: RootState) => store.login);
  const [account, setAccount] = useState({
    id: "",
    pw: "",
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleAccount = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setAccount((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  }, []);

  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    // e.stopPropagation();
    const { id, pw } = account;
    dispatch(loginRequest({ id, pw }));
    console.log(id);
  };
  // 로그인 체크
  useEffect(() => {
    isLoginCheck() ? navigate("/") : navigate("/login");
  }, [id]);

  return (
    <div>
      {logInLoading && <Spinner />}
      <Header />
      <div css={Style.Container}>
        <h2
          style={{
            fontWeight: "800",
            fontSize: "1.4rem",
            textTransform: "uppercase",
            color: "rgb(73, 73,73)",
            marginBottom: "2.4rem",
          }}
        >
          {" "}
          LOGIN{" "}
        </h2>
        <form method="post" onSubmit={onSubmitForm}>
          <input
            css={Style.Input}
            type="text"
            value={account.id}
            name="id"
            onChange={handleAccount}
            placeholder="🔑ID"
          />
          <input
            css={Style.Input}
            style={{ color: "black" }}
            type="password"
            name="pw"
            value={account.pw}
            onChange={handleAccount}
            placeholder="🔒PW"
            autoComplete="on"
          />
          <button css={Style.LoginBtn} type="submit">
            LOGIN
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

const Style = {
  Container: (theme: Theme) => css`
    position: relative;
    background-color: #fff;
    padding: 30px 60px;
    box-shadow: 4px 7px 1px 0px rgba(0, 0, 0, 0.2);
    max-width: 600px;
    height: 400px;
    text-align: center;
    margin: 1.2rem auto;
    color: black;
    display: flex;
    ${theme.mobile} {
      /* justify-content: flex-start; */
      width: 300px;
      height: 200px;
    }
  `,
  LoginBtn: (theme: Theme) => css`
    font-size: 18px;
    font-weight: 700;
    line-height: 49px;
    text-align: center;
    width: 100%;
    height: 49px;
    margin: 16px 0 7px;
    cursor: pointer;
    text-align: center;
    color: #fff;
    border: none;
    border-radius: 0;
    background-color: #03c75a;
    ${theme.mobile} {
      /* justify-content: flex-start; */
      text-justify: center;
      margin: -5px 0 7px;
    }
  `,
  Input: (theme: Theme) => css`
    display: inline-block;
    border: none;
    border-bottom: 2px solid rgba(173, 173, 173, 0.4);
    padding: 5px 0;
    width: 100%;
    margin: 2.4rem 0;
    color: black;
    ${theme.mobile} {
      justify-content: flex-start;
      text-justify: center;
      margin: 1rem 0;
      padding: 2px 0;
      width: 100%;
    }
  `,
};
