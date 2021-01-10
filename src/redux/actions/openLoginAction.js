import { CLOSE_LOGIN, OPEN_LOGIN } from "../../Constants";

export const openLogin = () => {
  return {
    type: OPEN_LOGIN,
  };
};
export const closeLogin = () => {
  return {
    type: CLOSE_LOGIN,
  };
};
