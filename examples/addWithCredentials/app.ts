import axios from "../../src/axios";

axios.post("http://192.168.1.2:3000/api/addWithCredentials", {}).then(res => {
  console.log(res);
});

axios
  .post(
    "http://192.168.1.2:3000/api/addWithCredentials",
    {},
    {
      withCredentials: true
    }
  )
  .then(res => {
    console.log(res);
  });
