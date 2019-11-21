import dispatchRequest from "../../src/core/dispatchRequest";

// 普通参数
dispatchRequest({
  method: "get",
  url: "/api/handleRequestURL/get",
  params: {
    a: 1,
    b: 2
  }
});

// 参数值为数组
dispatchRequest({
  method: "get",
  url: "/api/handleRequestURL/get",
  params: {
    foo: ["bar", "baz"]
  }
});

// 参数值为对象
dispatchRequest({
  method: "get",
  url: "/api/handleRequestURL/get",
  params: {
    foo: {
      bar: "baz"
    }
  }
});

// 参数值为 Date 类型
const date = new Date();
dispatchRequest({
  method: "get",
  url: "/api/handleRequestURL/get",
  params: {
    date
  }
});

// 参数值包含特殊字符
dispatchRequest({
  method: "get",
  url: "/api/handleRequestURL/get",
  params: {
    foo: "@:$, "
  }
});

// 参数值包含null或`undefined`
dispatchRequest({
  method: "get",
  url: "/api/handleRequestURL/get",
  params: {
    foo: "bar",
    baz: null
  }
});

// url 中存在哈希#标记
dispatchRequest({
  method: "get",
  url: "/api/handleRequestURL/get#hash?bar=baz",
  params: {
    foo: "bar"
  }
});

// url 中已存在的参数
dispatchRequest({
  method: "get",
  url: "/api/handleRequestURL/get?foo=bar",
  params: {
    bar: "baz"
  }
});
