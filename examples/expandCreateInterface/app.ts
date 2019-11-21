import axios from "../../src/axios";
import qs from "qs";

const instance1 = axios.create({
  headers: {
    NLRX: "Hello NLRX"
  }
});

instance1({
  url: "/api/expandCreateInterface",
  method: "post",
  data: qs.stringify({
    a: 1
  })
}).then(res => {
  console.log(res.data);
});

const instance2 = axios.create({
  headers: {
    test: "123"
  }
});

instance2({
  url: "/api/expandCreateInterface",
  method: "post",
  data: qs.stringify({
    a: 1
  })
}).then(res => {
  console.log(res.data);
});
