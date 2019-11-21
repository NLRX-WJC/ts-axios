import axios from "../../src/axios";
import qs from "qs";
axios
  .get("/api/addParamsSerializer", {
    params: new URLSearchParams("a=b&c=d")
  })
  .then(res => {
    console.log(res);
  });

axios
  .get("/api/addParamsSerializer", {
    params: {
      a: 1,
      b: 2,
      c: ["a", "b", "c"]
    }
  })
  .then(res => {
    console.log(res);
  });

axios
  .get("/api/addParamsSerializer", {
    params: {
      a: 1,
      b: 2,
      c: ["a", "b", "c"]
    },
    paramsSerializer: function(params) {
      return qs.stringify(params, { arrayFormat: "brackets" });
    }
  })
  .then(res => {
    console.log(res);
  });
