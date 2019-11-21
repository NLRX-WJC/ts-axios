import dispatchRequest from "../../src/core/dispatchRequest";

dispatchRequest({
  method: "post",
  url: "/api/handleRequestBody/post",
  data: {
    a: 1,
    b: 2
  }
});
