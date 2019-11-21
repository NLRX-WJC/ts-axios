const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

app.use(express.static("public"));
// 使用body-parser中间件
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

const router = express.Router();

router.get("/api/base/get", function(req, res) {
  res.json({
    msg: `hello world`
  });
});

router.get("/api/handleRequestURL/get", function(req, res) {
  res.json(req.query);
});

router.post("/api/handleRequestBody/post", function(req, res) {
  res.json(req.body);
});

router.post("/api/handleRequestHeader/post", function(req, res) {
  res.json(req.body);
});

router.post("/api/getResponse", function(req, res) {
  res.json(req.body);
});
// 异常处理
router.get("/api/handleError", function(req, res) {
  if (Math.random() > 0.5) {
    res.json({
      msg: `hello world`
    });
  } else {
    res.status(500);
    res.end();
  }
});

router.get("/api/handleError/timeout", function(req, res) {
  setTimeout(() => {
    res.json({
      msg: `hello world`
    });
  }, 3000);
});
// 扩展接口
router.get("/api/expandInterface/get", function(req, res) {
  res.json({
    msg: "hello world"
  });
});

router.options("/api/expandInterface/options", function(req, res) {
  res.end();
});

router.delete("/api/expandInterface/delete", function(req, res) {
  res.end();
});

router.head("/api/expandInterface/head", function(req, res) {
  res.end();
});

router.post("/api/expandInterface/post", function(req, res) {
  res.json(req.body);
});

router.put("/api/expandInterface/put", function(req, res) {
  res.json(req.body);
});

router.patch("/api/expandInterface/patch", function(req, res) {
  res.json(req.body);
});

// axios增加参数
router.post("/api/addParameters", function(req, res) {
  res.json(req.body);
});

// 响应支持泛型
router.get("/api/getuser", function(req, res) {
  res.json({
    msg: "hello world",
    data: { name: "难凉热血", age: 18 }
  });
});

// 默认配置合并
router.post("/api/mergeConfig", function(req, res) {
  res.json(req.body);
});

// 添加transformRequest 和 transformResponse
router.post("/api/transformData", function(req, res) {
  res.json(req.body);
});

// 添加create接口
router.post("/api/expandCreateInterface", function(req, res) {
  res.json(req.body);
});

// 取消请求
router.get("/api/cancel", function(req, res) {
  setTimeout(() => {
    res.json({
      msg: `hello world`
    });
  }, 3000);
});

// 添加withCredentials
const cors = {
  "Access-Control-Allow-Origin": "http://192.168.1.106:8000",
  "Access-Control-Allow-Credentials": true,
  "Access-Control-Allow-Methods": "POST, GET, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type"
};

router.post("/api/addWithCredentials", function(req, res) {
  res.set(cors);
  res.json(req.cookies);
});

router.options("/api/addWithCredentials", function(req, res) {
  res.set(cors);
  res.end();
});

// 防御XSRF
router.get("/api/defendXSRF", function(req, res) {
  res.cookie("XSRF-NLRX", "NLRX");
  res.json(req.cookies);
});
// 文件上传下载
router.get("/api/downloadFile", function(req, res) {
  res.sendFile(__dirname + "/1.mp4");
});

// 添加HTTP授权
const atob = require("atob");
router.get("/api/HTTPAuthorization", function(req, res) {
  const auth = req.headers.authorization;
  const [type, credentials] = auth.split(" ");
  const [username, password] = atob(credentials).split(":");
  res.json({
    type: type,
    username: username,
    password: password
  });
});
// 添加paramsSerializer属性
router.get("/api/addParamsSerializer", function(req, res) {
  res.end();
});
// 添加baseURL属性
router.get("/api/baseURL", function(req, res) {
  res.set(cors);
  res.end();
});
// 添加axios.all和axios.spread方法
router.get("/api/allAndSpreadA", function(req, res) {
  res.json({
    data: "allAndSpreadA"
  });
});
router.get("/api/allAndSpreadB", function(req, res) {
  res.json({
    data: "allAndSpreadB"
  });
});
app.use(router);

const port = process.env.PORT || 3000;
module.exports = app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}, Ctrl+C to stop`);
});
