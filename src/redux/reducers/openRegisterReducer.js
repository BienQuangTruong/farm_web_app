const { OPEN_REGISTER, CLOSE_REGISTER } = require("../../Constants");

const initalState = {
  openRegister: false,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case OPEN_REGISTER:
      return {
        ...state,
        openRegister: true,
      };
    case CLOSE_REGISTER:
      return {
        ...state,
        openRegister: false,
      };

    default:
      return state;
  }
};
export default reducer;
