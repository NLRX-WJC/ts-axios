import dispatchRequest from "../../src/core/dispatchRequest";

dispatchRequest({
  method: "get",
  url: "/api/base/get",
  params: {
    a: 1,
    b: 2
  }
});
