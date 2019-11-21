import {
  AxiosPromise,
  AxiosRequestConfig,
  AxiosResponse,
  Method,
  RejectedFn,
  ResolvedFn
} from "../types";
import dispatchRequest, { transformUrl } from "./dispatchRequest";
import { InterceptorManager } from "./InterceptorManager";
import mergeConfig from "./mergeConfig";

interface PromiseArr<T> {
  resolved: ResolvedFn<T> | ((config: AxiosRequestConfig) => AxiosPromise);
  rejected?: RejectedFn;
}

export default class Axios {
  defaults: AxiosRequestConfig;
  interceptors: {
    request: InterceptorManager<AxiosRequestConfig>;
    response: InterceptorManager<AxiosResponse<any>>;
  };
  constructor(defaultConfig: AxiosRequestConfig) {
    this.defaults = defaultConfig;
    this.interceptors = {
      request: new InterceptorManager<AxiosRequestConfig>(),
      response: new InterceptorManager<AxiosResponse>()
    };
  }
  request(url: any, config?: any): AxiosPromise {
    if (typeof url === "string") {
      config = config ? config : {};
      config.url = url;
    } else {
      config = url;
    }

    config = mergeConfig(this.defaults, config);

    let arr: PromiseArr<any>[] = [
      {
        resolved: dispatchRequest,
        rejected: undefined
      }
    ];

    this.interceptors.request.interceptors.forEach(interceptor => {
      if (interceptor !== null) {
        arr.unshift(interceptor);
      }
    });
    this.interceptors.response.interceptors.forEach(interceptor => {
      if (interceptor !== null) {
        arr.push(interceptor);
      }
    });
    let promise = Promise.resolve(config);

    while (arr.length) {
      const { resolved, rejected } = arr.shift()!;
      promise = promise.then(resolved, rejected);
    }

    return promise;
  }

  get(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithoutData("get", url, config);
  }

  delete(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithoutData("delete", url, config);
  }

  head(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithoutData("head", url, config);
  }

  options(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithoutData("options", url, config);
  }

  post(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithData("post", url, data, config);
  }

  put(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithData("put", url, data, config);
  }

  patch(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithData("patch", url, data, config);
  }

  getUri(config?: AxiosRequestConfig): string {
    config = mergeConfig(this.defaults, config);
    return transformUrl(config);
  }

  _requestMethodWithoutData(
    method: Method,
    url: string,
    config?: AxiosRequestConfig
  ) {
    return this.request(
      Object.assign(config || {}, {
        method,
        url
      })
    );
  }

  _requestMethodWithData(
    method: Method,
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ) {
    return this.request(
      Object.assign(config || {}, {
        method,
        url,
        data
      })
    );
  }
}
