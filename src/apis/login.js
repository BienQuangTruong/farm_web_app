import { fetch } from "../common/services/axiosSevices";
import { API_URL } from "../Constants";

export const fetchLogin = ({ accountLogin }) => {
  try {
    const response = fetch({
      url: `${API_URL}/v2/auth/token`,
      method: "POST",
      data: {
        ...accountLogin,
      },
    });
    console.log(response);
    if (response && response.success) {
      return response;
    }
  } catch (error) {
    return error;
  }
};
