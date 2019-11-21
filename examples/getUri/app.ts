import axios from "../../src/axios";

const config = {
  baseURL: "https://www.baidu.com/",
  url: "/user/NLRX",
  params: {
    idClient: 1,
    idTest: 2,
    testString: "thisIsATest"
  }
};
console.log(axios.getUri(config));
