import axios from "../../src/axios";

axios
  .get("/api/HTTPAuthorization", {
    auth: {
      username: "NLRX",
      password: "123456"
    }
  })
  .then(res => {
    console.log(res);
  });
