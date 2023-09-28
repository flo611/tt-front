import { Post } from "../axios";

export const Token = (email, password) => {
  const data = {
    email: email,
    password: password,
  };
  return Post("token", data).then((response) => {
    return response;
  });
};
