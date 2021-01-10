import { combineReducers } from "redux";
import LoadingReducer from "./LoadingReducer";
import LoginReducer from "./LoginReducer";
import OpenLoginReducer from "./openLoginReducer";
import OpenRegisterReducer from "./openRegisterReducer";
import RegisterReducer from "./RegisterReducer";

const rootReducer = combineReducers({
  login: LoginReducer,
  loading: LoadingReducer,
  openLogin: OpenLoginReducer,
  openRegister: OpenRegisterReducer,
  register: RegisterReducer,
});

export default rootReducer;
