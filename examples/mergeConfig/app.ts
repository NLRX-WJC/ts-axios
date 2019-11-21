import axios from "../../src/axios";
import qs from "qs";

axios.defaults.headers.common["NLRX"] = "Hello NLRX";
axios.defaults.headers.post["NLRX1"] = "post NLRX";
axios.defaults.headers.get["NLRX2"] = "get NLRX";

axios({
  url: "/api/mergeConfig",
  method: "post",
  data: qs.stringify({
    a: 1
  }),
  headers: {
    test: "321"
  }
}).then(res => {
  console.log(res.data);
});
