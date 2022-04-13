import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/react";
import Footer from "src/components/templates/footer";
import Header from "src/components/templates/header";
import Spinner from "src/components/spinner/spinner";
import { useDispatch, useSelector } from "react-redux";
import { loginRequestAction } from "src/store/login/action";
import { RootState } from "src/store";
import { fetchLogin } from "src/API/userAPI";

export default function Login() {
  const { id, logInLoading } = useSelector((store: RootState) => store.login);
  const [account, setAccount] = useState({
    id: "",
    pw: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAccount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccount((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
    console.log(account);
  };

  const onSubmitForm = (e: React.FormEvent) => {
    console.log("login clicked");
    e.preventDefault();
    const { id, pw } = account;
    if (id.trim() === "" || pw === "") return alert("아이디 또는 비밀번호를 확인해주세요.");
    dispatch(
      loginRequestAction({
        id: id,
        pw,
      }),
    );
  };

  const onSubmitAccount = async () => {
    try {
      const user = await fetchLogin(account);
      console.log(user);
      navigate("/");
    } catch (error) {
      window.alert(error);
    }
  };

  useEffect(() => {
    if (id) {
      navigate("/", { replace: true });
    }
  }, [id, navigate]);

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
        <form onSubmit={onSubmitForm}>
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
          />
          <button css={Style.LoginBtn} type="submit" onClick={onSubmitAccount}>
            LOGIN
          </button>
          {/* </Link> */}
        </form>
      </div>
      <Footer />
    </div>
  );
}

const Style = {
  Container: css`
    position: relative;
    background-color: #fff;
    padding: 30px 60px;
    box-shadow: 4px 7px 1px 0px rgba(0, 0, 0, 0.2);
    width: 600px;
    height: 400px;
    text-align: center;
    margin: 1.2rem auto;
    color: black;
  `,
  LoginBtn: css`
    font-size: 18px;
    font-weight: 700;
    line-height: 49px;
    display: block;
    width: 100%;
    height: 49px;
    margin: 16px 0 7px;
    cursor: pointer;
    text-align: center;
    color: #fff;
    border: none;
    border-radius: 0;
    background-color: #03c75a;
  `,
  Input: css`
    display: block;
    border: none;
    border-bottom: 2px solid rgba(173, 173, 173, 0.4);
    padding: 5px 0;
    width: 100%;
    margin: 2.4rem 0;
    color: black;
  `,
};
