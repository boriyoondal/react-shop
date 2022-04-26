// localStorage로 로그인 유무 판단
const isLoginCheck = () => !!localStorage.getItem("login");
console.log(isLoginCheck());
export default isLoginCheck;
