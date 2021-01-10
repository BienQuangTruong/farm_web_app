import { config } from "../common/model";

/**URL API - get from common -> model.js */
export const API_URL = config.urlAPI;

/**Default Admin Account - get from common -> model.js */
export const DEFAULT_ADMIN_ACCOUNT = {
  userid: config.userId,
  password: config.password,
  grantType: config.grantType,
};

/**Time out call API */
export const TIME_OUT = 3000;

/**Default data of login */
export const GRANTTYPE_LOGIN = "client_account";

/**Default data of register */
export const ROLE_ADMIN = "admin";
export const STATUS_ACTIVE = "active";

/**Actions - Login */
export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

/**Actions - Register */
export const REGISTER = "REGISTER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILED = "REGISTER_FAILED";

/**Actions - Loading */
export const SHOW_LOADING = "SHOW_LOADING";
export const HIDE_LOADING = "HIDE_LOADING";
export const CREATE_ACCOUNT_CLIENT = "CREATE_ACCOUNT_CLIENT";

/**Action - Open Dialog Login */
export const OPEN_LOGIN = "OPEN_LOGIN";
export const CLOSE_LOGIN = "CLOSE_LOGIN";

/**Action - Open Dialog Register */
export const OPEN_REGISTER = "OPEN_REGISTER";
export const CLOSE_REGISTER = "CLOSE_REGISTER";

/**Home */
export const ALT_IMG = "banner-inivite";
export const URL_BANNER_INVITE = "./banner-invite1.png";
export const URL_BENEFIT = "./img/benefit/benefit2.jpg";
