import { AxiosPromise, AxiosRequestConfig, AxiosResponse } from "../types";
import xhr from "./xhr";
import { buildURL } from "../helpers/url";
import { transformRequest, transformResponse } from "../helpers/data";
import { flattenHeaders, processHeaders } from "../helpers/header";
import transform from "./transform";
import isAbsoluteURL from "../helpers/isAbsoluteURL";
import combineURLs from "../helpers/combineURLs";

function dispatchRequest(config: AxiosRequestConfig): AxiosPromise {
  throwIfCancellationRequested(config);
  processConfig(config);
  return xhr(config).then(res => {
    return transformResponseData(res);
  });
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformUrl(config);
  config.data = transform(config.data, config.headers, config.transformRequest);
  config.headers = flattenHeaders(config.headers, config.method!);
}

export function transformUrl(config: AxiosRequestConfig): string {
  let { url, params, paramsSerializer, baseURL } = config;
  if (baseURL && !isAbsoluteURL(url!)) {
    url = combineURLs(baseURL, url);
  }
  return buildURL(url!, params, paramsSerializer);
}

function transformRequestData(config: AxiosRequestConfig): any {
  const { data } = config;
  return transformRequest(data);
}

function transformHeaders(config: AxiosRequestConfig): any {
  const { headers = {}, data } = config;
  return processHeaders(headers, data);
}

function transformResponseData(res: AxiosResponse): AxiosResponse {
  res.data = transform(res.data, res.headers, res.config.transformResponse);
  return res;
}

// 如果已经请求取消，则抛出异常。
function throwIfCancellationRequested(config: AxiosRequestConfig) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}
export default dispatchRequest;
