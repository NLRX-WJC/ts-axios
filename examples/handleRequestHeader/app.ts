import dispatchRequest from "../../src/core/dispatchRequest";

dispatchRequest({
  method: "post",
  url: "/api/handleRequestHeader/post",
  data: {
    a: 1,
    b: 2
  }
});

dispatchRequest({
  method: "post",
  url: "/api/handleRequestHeader/post",
  headers: {
    "content-type": "application/json; charset=UTF-8",
    Accept: "application/json,text/plain,*/*"
  },
  data: {
    a: 1,
    b: 2
  }
});

const paramsString = "q=URLUtils.searchParams&topic=api";
const searchParams = new URLSearchParams(paramsString);

dispatchRequest({
  method: "post",
  url: "/api/handleRequestHeader/post",
  data: searchParams
});
