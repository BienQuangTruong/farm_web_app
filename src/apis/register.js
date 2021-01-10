import { fetch, fetchAuth } from "../common/services/axiosSevices";
import { API_URL, DEFAULT_ADMIN_ACCOUNT } from "../Constants";

export const fetchRegister = async (info) => {
  const infoAdmin = {
    ...DEFAULT_ADMIN_ACCOUNT,
  };

  const infoClient = {
    ...info.infoClient,
  };

  const infoAccountClient = {
    ...info.infoAccountClient,
  };
  //get token from admin account
  let token;
  try {
    const responseGetToken = await fetch({
      url: `${API_URL}/v2/auth/token`,
      method: "POST",
      data: {
        ...infoAdmin,
      },
    });

    if (responseGetToken && responseGetToken.status === 200) {
      token = responseGetToken.data.accessToken;
    }
    console.log("getTokenAdmin -> responseGetToken", responseGetToken);
    console.log("getTokenAdmin -> token", token);
    //create account client
    let idClient;
    try {
      const responseCreateClient = await fetchAuth({
        url: `${API_URL}/v2/client`,
        method: "POST",
        data: {
          ...infoClient,
        },
        token: token,
      });

      if (responseCreateClient && responseCreateClient.status === 201) {
        idClient = responseCreateClient.data.id;
      }
      console.log(
        "getTokenAdmin -> responseCreateClient",
        responseCreateClient
      );
      console.log("getTokenAdmin -> idClient", idClient);
      //create account client
      try {
        const responsetAccountClient = await fetchAuth({
          url: `${API_URL}/v2/client/${idClient}/account`,
          method: "POST",
          data: {
            ...infoAccountClient,
          },
          token: token,
        });
        console.log(
          "🚀 ~ file: register.js ~ line 62 ~ fetchRegister ~ responsetAccountClient",
          responsetAccountClient
        );
        if (responsetAccountClient && responsetAccountClient.status === 201) {
          alert("Register account client successfully!!");
        }
      } catch (error) {
        console.log("error", error);
        try {
          const responseDeleteClient = await fetchAuth({
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
};
