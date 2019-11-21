import axios from "../../src/axios";
import { AxiosTransformer } from "../../src/types";

axios({
  url: "/api/transformData",
  method: "post",
  data: {
    a: 1
  },
  transformRequest: [
    function(data) {
      data.a = data.a + 1;
      return data;
    },
    ...(axios.defaults.transformRequest as AxiosTransformer[])
  ],
  transformResponse: [
    ...(axios.defaults.transformResponse as AxiosTransformer[]),
    function(data) {
      data.b = "对响应进行了转换";
      return data;
    }
  ]
}).then(res => {
  console.log(res.data);
});
