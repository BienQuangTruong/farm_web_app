import { delay, put, takeLatest } from "redux-saga/effects";
import { fetch } from "../../common/services/axiosSevices";
import { API_URL, LOGIN } from "../../Constants";
import { hideLoading, showLoading } from "../actions/loadingAction";
import { loginFailed, loginSuccess } from "../actions/LoginAction";
import { closeLogin } from "../actions/openLoginAction";

function* loginSaga({ payload }) {
  const { accountLogin } = payload;
  yield put(showLoading());
  try {
    const response = yield fetch({
      url: `${API_URL}/v2/auth/token`,
      method: "POST",
      data: {
        ...accountLogin,
      },
    });
    yield delay(500);
    yield put(hideLoading());
    yield delay(200);

    if (response && response.status === 200) {
      yield put(loginSuccess(response.data));
    } else {
      yield put(loginFailed("Login failed"));
    }

    yield put(closeLogin());
  } catch (ex) {
    console.log("function*loginSaga -> ex", ex);
    yield delay(500);
    yield put(hideLoading());
    yield delay(200);
    const { statusCode } = ex;
    //400: User not found
    //404: Not found url
    if (statusCode && statusCode === 400) {
      yield put(loginFailed("Invalid password"));
    } else if (statusCode && statusCode === 404) {
      yield put(loginFailed("Not founded URL"));
    } else if (statusCode && statusCode === 500) {
      yield put(loginFailed("Email not existed"));
    }
  }
}

function* watchLasterLogin() {
  yield takeLatest(LOGIN, loginSaga);
}

export default [watchLasterLogin()];
