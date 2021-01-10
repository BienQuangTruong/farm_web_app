import { LOGIN, LOGIN_FAILED, LOGIN_SUCCESS } from "../../Constants";

export const login = (accountLogin) => {
  return { type: LOGIN, payload: { accountLogin } };
};
export const loginSuccess = (data) => {
  return { type: LOGIN_SUCCESS, payload: data };
};
export const loginFailed = (error) => {
  return { type: LOGIN_FAILED, payload: error };
};
