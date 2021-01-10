import {
  GRANTTYPE_LOGIN,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
} from "../../Constants";

const initialRegister = {
  userid: "",
  password: "",
  grantType: GRANTTYPE_LOGIN,
};

const RegisterReducer = (state = initialRegister, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS: {
      const { userid, password } = action.payload;
      if (userid) {
        alert("Register successfully!!");
      }
      return {
        ...state,
        userid,
        password,
      };
    }
    case REGISTER_FAILED: {
      if (action.payload) {
        alert(action.payload);
      }
      return { ...state, accessToken: "", expiredIn: "" };
    }
    default:
      return state;
  }
};

export default RegisterReducer;
