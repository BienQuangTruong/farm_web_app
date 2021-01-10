import { LOGIN, LOGIN_FAILED, LOGIN_SUCCESS } from "../../Constants";

const initialLogin = {
  accessToken: "",
  expiredIn: "",
};

const LoginReducer = (state = initialLogin, action) => {
  switch (action.type) {
    case LOGIN: {
      let newInfo = { ...state };
      newInfo = { ...action.payload };
      return {
        state,
      };
    }
    case LOGIN_SUCCESS: {
      const { accessToken, expiredIn } = action.payload;
      if (accessToken) {
        alert("Login successfully!!");
      }
      return {
        ...state,
        accessToken,
        expiredIn,
      };
    }
    case LOGIN_FAILED: {
      if (action.payload) {
        alert(action.payload);
      }
      return { ...state, accessToken: "", expiredIn: "" };
    }
    default:
      return state;
  }
};

export default LoginReducer;
