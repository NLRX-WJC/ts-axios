import axios from "../../src/axios";

axios
  .get("/api/defendXSRF", {
    xsrfCookieName: "XSRF-NLRX",
    xsrfHeaderName: "X-XSRF-NLRX",
    withCredentials: true
  })
  .then(res => {
    console.log(res);
  });
