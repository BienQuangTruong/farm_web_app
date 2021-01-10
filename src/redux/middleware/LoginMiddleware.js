import { fetchClientLogin } from "../../apis/handle";
import { API_URL } from "../../Constants";

export const loginMiddleWare = (store) => (next) => async (action) => {
  if (action.type === "LOGIN") {
    let token;
    try {
      const response = await fetchClientLogin({
        url: `${API_URL}/v2/auth/token`,
        method: "POST",
        data: { ...action.payload },
      });
      if (response && response.success) {
        token = response.accessToken;
        alert("Login Success");
        // toast.notify("Login successfully!!!", {
        //   duration: 5,
        //   type: "success",
        // });
      }

      // return next(action);
    } catch (error) {
      console.log("loginMiddleWare -> error", error);

      alert(error.message);
      // if (error.message.lastIndexOf("500") !== -1) {
      //   alert("Sai email");
      // } else if (error.message.lastIndexOf("400") !== -1) {
      //   alert("Sai password");
      // } else if (error.message.lastIndexOf("404") !== -1) {
      //   alert("Error connect to server");
      // }
      // toast.notify("Kết nối server thất bại", {
      //   duration: 5,
      //   type: "error",
      // });
      return;
    }
  }
};
