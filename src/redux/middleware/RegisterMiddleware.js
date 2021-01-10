import { fetchCreateClient, fetchGetTokenAdmin } from "../../apis/handle";
import { API_URL } from "../../Constants";

export const getTokenAdmin = (store) => (next) => async (action) => {
  if (action.type === "GET_TOKEN_ADMIN") {
    const infoAdmin = {
      ...action.payload.infoAdmin,
    };

    const infoClient = {
      ...action.payload.infoClient,
    };

    const infoAccountClient = {
      ...action.payload.infoAccountClient,
    };

    //get token from admin account
    let token;
    try {
      const responseGetToken = await fetchGetTokenAdmin({
        url: `${API_URL}/v2/auth/token`,
        method: "POST",
        data: {
          ...infoAdmin,
        },
      });

      if (responseGetToken && responseGetToken.success) {
        token = responseGetToken.data.accessToken;
      }
      console.log("getTokenAdmin -> responseGetToken", responseGetToken);
      console.log("getTokenAdmin -> token", token);
      //create account client
      let idClient;
      try {
        const responseCreateClient = await fetchCreateClient({
          url: `${API_URL}/v2/client`,
          method: "POST",
          data: {
            ...infoClient,
          },
          token: token,
        });

        if (responseCreateClient && responseCreateClient.success) {
          idClient = responseCreateClient.data.id;
        }
        console.log(
          "getTokenAdmin -> responseCreateClient",
          responseCreateClient
        );
        console.log("getTokenAdmin -> idClient", idClient);
        //create account client
        try {
          const responsetAccountClient = await fetchCreateClient({
            url: `${API_URL}/v2/client/${idClient}/account`,
            method: "POST",
            data: {
              ...infoAccountClient,
            },
            token: token,
          });
          if (responsetAccountClient && responsetAccountClient.success) {
            alert("Register account client successfully!!");
          }
        } catch (error) {
          console.log("getTokenAdmin -> error", error);
          try {
            const responseDeleteClient = await fetchCreateClient({
              url: `${API_URL}/v2/client/${idClient}`,
              method: "DELETE",
              data: {},
              token: token,
            });
            if (responseDeleteClient && responseDeleteClient.data.deleted) {
              alert("Register account failed. Error: 'Email existed'");
            }
          } catch (error) {
            console.log(error);
            return;
          }
        }
      } catch (error) {
        if (error.statusCode === 401) {
          alert("Unauthorized");
        }
        return;
      }
    } catch (error) {
      if (error.statusCode === 404 || error.statusCode === 500) {
        //404: sai url api, 500: sai grandtype
        alert("Error connect to server");
      } else if (error.statusCode === 400) {
        alert("Account system not existed");
      }
      return;
    }
  }
};
