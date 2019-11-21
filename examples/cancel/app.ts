import axios from "../../src/axios";
import { Canceler } from "../../src/types";

const CancelToken = axios.CancelToken;
let cancel: Canceler;

// axios
//   .get("/api/cancel", {
//     cancelToken: new CancelToken(c => {
//       cancel = c;
//     })
//   })
//   .catch(function(e) {
//     if (axios.isCancel(e)) {
//       console.log(`请求取消原因：${e.message}`);
//     }
//   });
//
// setTimeout(() => {
//   cancel("Operation canceled by the user");
// }, 1000);

const source = CancelToken.source();

axios
  .get("/api/cancel", {
    cancelToken: source.token
  })
  .catch(function(e) {
    if (axios.isCancel(e)) {
      console.log(`请求取消原因：${e.message}`);
    }
  });

setTimeout(() => {
  source.cancel("Operation canceled by the user");
}, 1000);

setTimeout(() => {
  axios
    .get("/api/cancel", {
      cancelToken: source.token
    })
    .catch(function(e) {
      if (axios.isCancel(e)) {
        console.log(`请求取消原因：${e.message}`);
      }
    });
}, 1500);
