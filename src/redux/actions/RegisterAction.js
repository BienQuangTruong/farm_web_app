import { REGISTER, REGISTER_FAILED, REGISTER_SUCCESS } from "../../Constants";

export const register = (accountRegister) => {
  return { type: REGISTER, payload: { accountRegister } };
};
export const registerSuccess = (data) => {
  return { type: REGISTER_SUCCESS, payload: data };
};
export const registerFailed = (error) => {
  return { type: REGISTER_FAILED, payload: error };
};
