import axios from "../../src/axios";

axios({
  url: "/api/addParameters",
  method: "post",
  data: {
    msg: "hi"
  }
});

axios("/api/addParameters", {
  method: "post",
  data: {
    msg: "hello"
  }
});
