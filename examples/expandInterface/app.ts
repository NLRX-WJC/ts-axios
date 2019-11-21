import axios from "../../src/axios";

axios({
  url: "/api/expandInterface/post",
  method: "post",
  data: {
    msg: "hi"
  }
});

axios.request({
  url: "/api/expandInterface/post",
  method: "post",
  data: {
    msg: "hello"
  }
});

axios.get("/api/expandInterface/get");

axios.options("/api/expandInterface/options");

axios.delete("/api/expandInterface/delete");

axios.head("/api/expandInterface/head");

axios.post("/api/expandInterface/post", { msg: "post" });

axios.put("/api/expandInterface/put", { msg: "put" });

axios.patch("/api/expandInterface/patch", { msg: "patch" });
