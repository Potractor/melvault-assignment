export const storeUserDetails = (resp) =>  {
          localStorage.setItem(
            "token",
            resp.data.tokenType + " " + resp.data.accessToken
          );
          localStorage.setItem(
            "userDetails",
            JSON.stringify(resp.data.userdetails)
          );
}