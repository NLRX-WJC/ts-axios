# 0.系列文章
[1.使用Typescript重构axios(一)——写在最前面](https://www.cnblogs.com/wangjiachen666/p/11234163.html)

[2.使用Typescript重构axios(二)——项目起手，跑通流程](https://www.cnblogs.com/wangjiachen666/p/11234180.html)

[3.使用Typescript重构axios(三)——实现基础功能：处理get请求url参数](https://www.cnblogs.com/wangjiachen666/p/11237521.html)

[4.使用Typescript重构axios(四)——实现基础功能：处理post请求参数](https://www.cnblogs.com/wangjiachen666/p/11243225.html)

[5.使用Typescript重构axios(五)——实现基础功能：处理请求的header](https://www.cnblogs.com/wangjiachen666/p/11254336.html)

[6.使用Typescript重构axios(六)——实现基础功能：获取响应数据](https://www.cnblogs.com/wangjiachen666/p/11256456.html)

[7.使用Typescript重构axios(七)——实现基础功能：处理响应header](https://www.cnblogs.com/wangjiachen666/p/11264442.html)

[8.使用Typescript重构axios(八)——实现基础功能：处理响应data](https://www.cnblogs.com/wangjiachen666/p/11264699.html)

[9.使用Typescript重构axios(九)——异常处理：基础版](https://www.cnblogs.com/wangjiachen666/p/11275512.html)

[10.使用Typescript重构axios(十)——异常处理：增强版](https://www.cnblogs.com/wangjiachen666/p/11279283.html)

[11.使用Typescript重构axios(十一)——接口扩展](https://www.cnblogs.com/wangjiachen666/p/11287814.html)

[12.使用Typescript重构axios(十二)——增加参数](https://www.cnblogs.com/wangjiachen666/p/11291425.html)

[13.使用Typescript重构axios(十三)——让响应数据支持泛型](https://www.cnblogs.com/wangjiachen666/p/11299363.html)

[14.使用Typescript重构axios(十四)——实现拦截器](https://www.cnblogs.com/wangjiachen666/p/11307815.html)

[15.使用Typescript重构axios(十五)——默认配置](https://www.cnblogs.com/wangjiachen666/p/11322592.html)

[16.使用Typescript重构axios(十六)——请求和响应数据配置化](https://www.cnblogs.com/wangjiachen666/p/11323409.html)

[17.使用Typescript重构axios(十七)——增加axios.create](https://www.cnblogs.com/wangjiachen666/p/11326676.html)

[18.使用Typescript重构axios(十八)——请求取消功能：总体思路](https://www.cnblogs.com/wangjiachen666/p/11332690.html)

[19.使用Typescript重构axios(十九)——请求取消功能：实现第二种使用方式](https://www.cnblogs.com/wangjiachen666/p/11332641.html)

[20.使用Typescript重构axios(二十)——请求取消功能：实现第一种使用方式](https://www.cnblogs.com/wangjiachen666/p/11332905.html)

[21.使用Typescript重构axios(二十一)——请求取消功能：添加axios.isCancel接口](https://www.cnblogs.com/wangjiachen666/p/11333726.html)

[22.使用Typescript重构axios(二十二)——请求取消功能：收尾](https://www.cnblogs.com/wangjiachen666/p/11333751.html)

[23.使用Typescript重构axios(二十三)——添加withCredentials属性](https://www.cnblogs.com/wangjiachen666/p/11345881.html)

[24.使用Typescript重构axios(二十四)——防御XSRF攻击](https://www.cnblogs.com/wangjiachen666/p/11351295.html)

[25.使用Typescript重构axios(二十五)——文件上传下载进度监控](https://www.cnblogs.com/wangjiachen666/p/11354442.html)

[26.使用Typescript重构axios(二十六)——添加HTTP授权auth属性](https://www.cnblogs.com/wangjiachen666/p/11357231.html)

[27.使用Typescript重构axios(二十七)——添加请求状态码合法性校验](https://www.cnblogs.com/wangjiachen666/p/11359569.html)

[28.使用Typescript重构axios(二十八)——自定义序列化请求参数](https://www.cnblogs.com/wangjiachen666/p/11373168.html)

[29.使用Typescript重构axios(二十九)——添加baseURL](https://www.cnblogs.com/wangjiachen666/p/11373487.html)

[30.使用Typescript重构axios(三十)——添加axios.getUri方法](https://www.cnblogs.com/wangjiachen666/p/11373863.html)

[31.使用Typescript重构axios(三十一)——添加axios.all和axios.spread方法](https://www.cnblogs.com/wangjiachen666/p/11377084.html)

[32.使用Typescript重构axios(三十二)——写在最后面（总结）](https://www.cnblogs.com/wangjiachen666/p/11377460.html)

# 1.前言

俗话说：检验学习成果最直接的方式就是造论子。本系列文章是博主在学习了`TypeScript`之后，为了检验自己的学习成果，萌生出造一个轮子试试的想法。由于是第一次造轮子，所以想选择一个常用，易于理解，并且自己较熟悉的轮子。网上搜索一番，发现前后端交互神器`axios`造的人挺多的，并且提供了很多重构思路，为了能够站在巨人的肩膀上，并且`axios`也刚好符合上面提到的三个要求，那就是它啦，使用`TypeScript`重构`axios`。

# 2.需求分析

> axios,基于Promise的HTTP客户端，用于浏览器和node.js

重构之前，我们需要简单地做一些需求分析，看一下我们这次重构需要支持哪些 Features。官方支持的Features如下：

- Make [XMLHttpRequests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) from the browser
- ~~Make [http](http://nodejs.org/api/http.html) requests from node.js~~
- Supports the [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) API
- Intercept request and response
- Transform request and response data
- Cancel requests
- Automatic transforms for JSON data
- Client side support for protecting against [XSRF](http://en.wikipedia.org/wiki/Cross-site_request_forgery)

这次重构，我们只实现官方支持的8个Features中的7个，其中axios在node中的应用不打算实现，因为这部分在日常使用中相对较少（其实是因为懒，逃~）。

# 3.目录介绍

本项目分为客户端（examples文件夹）和服务端（server文件夹）：客户端主要是用来检验重构功能的demo，采用TypeScript按照模块化进行编写；服务端是用来响应demo中发出的请求，采用express编写。
```
├─.gitignore
├─index.html
├─package.json
├─README.md
├─tsconfig.json       // TypeScript 编译配置文件
├─tslint.json         // TypeScript lint 文件
├─examples            // 每个功能点的demo
├─server              // 服务端源码
└─src                 // 源码目录
    ├─axios.ts
    ├─defaultes.ts  
    ├─cancel    
    ├─core    
    ├─helpers   
    └─types
```
# 4.项目运行

```bash
# 克隆项目到本地
git clone https://github.com/wangjiachen199366/ts-axios.git

# 进入项目目录
cd ts-axios

# 安装依赖
npm install

# 同时打开客户端和服务端
npm run server | npm start
```
