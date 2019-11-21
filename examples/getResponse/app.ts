import dispatchRequest from "../../src/core/dispatchRequest";

dispatchRequest({
  method: "post",
  url: "/api/getResponse",
  data: {
    a: 1,
    b: 2
  }
}).then(res => {
  console.log(res);
});

dispatchRequest({
  method: "post",
  url: "/api/getResponse",
  responseType: "json",
  data: {
    a: 3,
    b: 4
  }
}).then(res => {
  console.log(res);
});
