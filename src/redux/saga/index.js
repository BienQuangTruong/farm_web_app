import { all } from "redux-saga/effects";
import loginSaga from "./LoginSaga";

function* rootSaga() {
  yield all([...loginSaga]);
}

export default rootSaga;
