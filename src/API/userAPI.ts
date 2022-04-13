type Props = {
  id: string;
  pw: string;
};

export const fetchLogin = async (props: Props) => {
  const { id, pw } = props;
  const response = await fetch("http://localhost:9999/api");

  if (response.ok) {
    const users = await response.json();

    console.log(users);

    const user = users.users.find((user: any) => user.id === id);

    console.log(user);
    if (!user || user.pw !== pw) {
      throw new Error("일치 정보 없음");
    }
    return user;
  }
  throw new Error("서버 통신 에러");
};
