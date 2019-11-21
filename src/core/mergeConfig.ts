import { AxiosRequestConfig } from "../types";
import { deepMerge, isObject } from "../helpers/util";

export default function mergeConfig(
  defaultConfig: AxiosRequestConfig,
  userConfig?: AxiosRequestConfig
): AxiosRequestConfig {
  userConfig = userConfig || {};
  let config = Object.create(null); // 创建空对象，作为最终的合并结果

  // 1.常规属性，如果用户配置了就用用户配置的，如果用户没配置，则用默认配置的；
  let defaultToUserConfig = [
    "baseURL",
    "transformRequest",
    "transformResponse",
    "paramsSerializer",
    "timeout",
    "withCredentials",
    "adapter",
    "responseType",
    "xsrfCookieName",
    "xsrfHeaderName",
    "onUploadProgress",
    "onDownloadProgress",
    "maxContentLength",
    "validateStatus",
    "maxRedirects",
    "httpAgent",
    "httpsAgent",
    "cancelToken",
    "socketPath"
  ];
  defaultToUserConfig.forEach(prop => {
    userConfig = userConfig || {};
    // 如果用户配置里有
    if (typeof userConfig[prop] !== "undefined") {
      // 则用用户配置里的
      config[prop] = userConfig[prop];
      // 如果用户配置里没有，默认配置里有
    } else if (typeof defaultConfig[prop] !== "undefined") {
      // 则用默认配置里的
      config[prop] = defaultConfig[prop];
    }
  });
  // 2.只接受自定义配置,不管默认配置对象里面有没有，我们只取用户配置的；
  let valueFromUserConfig = ["url", "method", "params", "data"];
  valueFromUserConfig.forEach(prop => {
    userConfig = userConfig || {};
    if (typeof userConfig[prop] !== "undefined") {
      config[prop] = userConfig[prop];
    }
  });
  // 3.复杂对象深度合并
  let mergeDeepProperties = ["headers", "auth", "proxy"];
  mergeDeepProperties.forEach(prop => {
    userConfig = userConfig || {};
    if (isObject(userConfig[prop])) {
      config[prop] = deepMerge(defaultConfig[prop], userConfig[prop]);
    } else if (typeof userConfig[prop] !== "undefined") {
      config[prop] = userConfig[prop];
    } else if (isObject(defaultConfig[prop])) {
      config[prop] = deepMerge(defaultConfig[prop]);
    } else if (typeof defaultConfig[prop] !== "undefined") {
      config[prop] = defaultConfig[prop];
    }
  });
  return config;
}
