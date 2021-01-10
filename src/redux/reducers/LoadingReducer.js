const { SHOW_LOADING, HIDE_LOADING } = require("../../Constants");

const initialState = {
  showLoading: false,
};

const LoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADING: {
      return {
        ...state,
        showLoading: true,
      };
    }

    case HIDE_LOADING: {
      return {
        ...state,
        showLoading: false,
      };
    }
    default:
      return state;
  }
};
export default LoadingReducer;
