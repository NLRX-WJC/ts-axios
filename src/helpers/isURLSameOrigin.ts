interface URLOrigin {
  protocol: string;
  host: string;
  port: string;
}

export default function isURLSameOrigin(requestURL: string): boolean {
  let urlParsingNode = document.createElement("a");

  // 1.先获取当前页面地址的协议、域名、端口
  const currentOrigin = resolveURL(window.location.href);
  // 2.再获取请求url的协议、域名、端口
  const parsedOrigin = resolveURL(requestURL);

  // 3.最后比较三者是否相同
  return (
    parsedOrigin.protocol === currentOrigin.protocol &&
    parsedOrigin.host === currentOrigin.host &&
    parsedOrigin.port === currentOrigin.port
  );

  // 创建一个可以通过url获取协议、域名、端口的函数
  function resolveURL(url: string): URLOrigin {
    urlParsingNode.setAttribute("href", url);
    return {
      protocol: urlParsingNode.protocol
        ? urlParsingNode.protocol.replace(/:$/, "")
        : "",
      host: urlParsingNode.host,
      port: urlParsingNode.port
    };
  }
}
