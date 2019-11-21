import axios from "../../src/axios";

// 请求拦截器1
let requestInterceptor1 = axios.interceptors.request.use(config => {
  config.headers.test += "requestInterceptors1---";
  return config;
});

// 请求拦截器2
axios.interceptors.request.use(config => {
  config.headers.test += "requestInterceptors2---";
  return config;
});

// 请求拦截器3
axios.interceptors.request.use(config => {
  config.headers.test += "requestInterceptors3---";
  return config;
});

// 响应拦截器1
axios.interceptors.response.use(response => {
  response.data.test += "响应拦截器1";
  return response;
});

// 响应拦截器2
let responseInterceptor2 = axios.interceptors.response.use(response => {
  response.data.test += "响应拦截器2";
  return response;
});

// 响应拦截器3
axios.interceptors.response.use(response => {
  response.data.test += "响应拦截器3";
  return response;
});

axios.interceptors.request.eject(requestInterceptor1);
axios.interceptors.response.eject(responseInterceptor2);

axios.get("/api/getuser", { headers: { test: "NLRX---" } }).then(res => {
  console.log(res);
});
