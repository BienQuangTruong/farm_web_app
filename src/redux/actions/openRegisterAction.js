import { CLOSE_REGISTER, OPEN_REGISTER } from "../../Constants";

export const openRegister = () => {
  return {
    type: OPEN_REGISTER,
  };
};
export const closeRegister = () => {
  return {
    type: CLOSE_REGISTER,
  };
};
