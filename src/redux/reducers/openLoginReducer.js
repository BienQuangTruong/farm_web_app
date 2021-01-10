const { OPEN_LOGIN, CLOSE_LOGIN } = require("../../Constants");

const initalState = {
  openLogin: false,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case OPEN_LOGIN:
      return {
        ...state,
        openLogin: true,
      };
    case CLOSE_LOGIN:
      return {
        ...state,
        openLogin: false,
      };

    default:
      return state;
  }
};
export default reducer;
