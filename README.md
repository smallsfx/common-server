# common-server

# common-ui-port


# QDPUI开发文档

## 许可

- 文档、资源、脚本拥有 MIT 许可证：
  - <https://opensource.org/licenses/mit-license.html>

## 技术栈

- HTML
  - HTML
  - HTML5

- JavaScript
  - JQuery
  - RequireJS
    - async
    - css
  - BootstrapValidator
  - Select2
  - Laydate
  - Bootbox
  - jsTree
  - Baidu
    - ECharts
    - Map

- CSS
  - Animate
  - Bootstrap
  - Font-Awesome
  - Ionicons

## 模块定义

|模块|模块描述|版本|作者|
|-|:-|:-|:-|
|LoggerModule|日志处理模块|1.0.0.0|smalls|
|UtilModule|公共工具模块|1.0.0.0|smalls|
|DialogModule|对话框模块|1.0.0.0|smalls|
|BlockModule|元素遮罩模块|1.0.0.0|smalls|
|DictModule|数据字典模块|1.0.0.0|smalls|
|StoreagModule|本地存储模块|1.0.0.0|smalls|
|EventEmitter|事件处理模块|1.0.0.0|smalls|
|AJAXModule|AJAX请求模块|1.0.0.0|smalls|
|FormModule|表单处理模块|1.0.0.0|smalls|
|TableModule|表格处理模块|1.0.0.0|smalls|
|LayoutModule|布局处理模块|1.0.0.0|smalls|
|GeneratorModule|表单构建器|1.0.0.0|smalls|

### LoggerModule 日志处理模块

继承默认控制台，封装了常用的标准方法

- 变更记录

  - 2018年1月16日 编入文档 by smalls 版本 1.0.0.0

- 参数配置

  ```javascript
  window.qdp.debugger = { 
    "debug": true,  // 定义是否可以输出debug级别日志
    "info": true,   // 定义是否可以输出info级别日志
    "warn": true,   // 定义是否可以输出warn级别日志
    "error": true   // 定义是否可以输出error级别日志
  };
  ```

- 属性定义

  无

- 方法定义

  名称|类型|默认值|描述
  -|-|-|-
  text|string|undefined|需要输出的文本内容

  - info(text)

    - 参数
      名称|类型|默认值|描述
      -|-|-|-
      text|string|undefined|需要输出的文本内容

    - 示例

      ```javascript
      console.info('输出info级别日志');
      ```

  - debug(text)

    - 参数
      名称|类型|默认值|描述
      -|-|-|-
      text|string|undefined|需要输出的文本内容

    - 示例

      ```javascript
      console.debug('输出debug级别日志');
      ```

  - error(text)

    - 参数
      名称|类型|默认值|描述
      -|-|-|-
      text|string|undefined|需要输出的文本内容

    - 示例

      ```javascript
      console.error('输出error级别日志');
      ```

  - warn(text)

    - 参数
      名称|类型|默认值|描述
      -|-|-|-
      text|string|undefined|需要输出的文本内容

    - 示例

      ```javascript
      console.warn('输出warn级别日志');
      ```

- 事件定义

  无

### UtilModule 公共工具模块

封装一些常用的方法，例如URL解析、BASE64加密解密、MD5加密、字符串格式化、日期时间格式化等等。

- 变更记录

  - 2018年1月16日 编入文档 by smalls 版本 1.0.0.0

- 参数配置

  无

- 属性定义

  无

- 方法定义

  - parseURL(url)

    解析URL返回URL中各部件。例如：文件名、地址、域名、请求、端口、协议等

    - 参数
      名称|类型|默认值|描述
      -|-|-|-
      url|string|undefined|完整的URL地址

    - 返回值

      object

    - 示例

      ```javascript
      var url = window.qdp.util.parseURL('http://www.github.com/smallsfx/login.html?u=a&p=b#top');
      url.file = 'login.html';
      url.hash = 'top';
      url.host = 'github.com';
      url.query = '?u=a&p=b';
      url.params = Object ={u:a,p=b};
      url.path = '/smallsfx/login.html';
      url.segments= Array =['smallsfx','login.html'];
      url.prot = '80';
      url.protocol = 'http';
      url.source = 'http://www.github.com/smallsfx/login.html?u=a&p=b#top';
      ```

  - stringToUTC(text)

    - 参数
      名称|类型|默认值|描述
      -|-|-|-
      text|string|undefined|需要输出的文本内容

    - 示例

      ```javascript
      console.info('输出info级别日志');
      ```

- 事件定义

  无

### DialogModule 对话框模块

此处应为对话框模块描述

- 变更记录

  - 2018年1月16日 编入文档 by smalls 版本 1.0.0.0

- 参数配置

  无

- 属性定义

  无

- 方法定义

  无

- 事件定义

  无

### DictModule 数据字典模块

此处应为数据字典模块介绍类描述

- 变更记录

  - 2018年1月16日 编入文档 by smalls 版本 1.0.0.0

- 参数配置

  无

- 属性定义

  无

- 方法定义

  无

- 事件定义

  无

### StorageModule 本地存储模块

此处应为本地存储模块介绍类描述

- 变更记录

  - 2018年1月16日 编入文档 by smalls 版本 1.0.0.0

- 参数配置

  无

- 属性定义

  无

- 方法定义

  无

- 事件定义

  无

### EventEmitter 事件处理模块

此处应为事件处理模块介绍类描述

- 变更记录

  - 2018年1月16日 编入文档 by smalls 版本 1.0.0.0

- 参数配置

  无

- 属性定义

  无

- 方法定义

  无

- 事件定义

  无

### BlockModule 元素遮罩模块

此处应为元素遮罩模块介绍类描述

- 变更记录

  - 2018年1月16日 编入文档 by smalls 版本 1.0.0.0

- 参数配置

  无

- 属性定义

  无

- 方法定义

  无

- 事件定义

  无

### AJAXModule AJAX请求处理模块

此处应为AJAX请求处理模块介绍类描述

- 变更记录

  - 2018年1月16日 编入文档 by smalls 版本 1.0.0.0

- 参数配置

  无

- 属性定义

  无

- 方法定义

  无

- 事件定义

  无

### TableModule 表格处理模块

此处应为表格处理模块介绍类描述

- 变更记录

  - 2018年1月16日 编入文档 by smalls 版本 1.0.0.0

- 参数配置

  无

- 属性定义

  无

- 方法定义

  无

- 事件定义

  无

### FormModule 表单处理模块

此处应为表单处理模块介绍类描述

- 变更记录

  - 2018年1月16日 编入文档 by smalls 版本 1.0.0.0

- 参数配置

  无

- 属性定义

  无

- 方法定义

  无

- 事件定义

  无

### LayoutModule 布局处理模块

此处应为布局处理模块介绍类描述

- 变更记录

  - 2018年1月16日 编入文档 by smalls 版本 1.0.0.0

- 参数配置

  无

- 属性定义

  无

- 方法定义

  无

- 事件定义

  无

### GeneratorModule 表单构建器

此处应为表单构建器介绍类描述

- 变更记录

  - 2018年1月16日 编入文档 by smalls 版本 1.0.0.0

- 参数配置

  无

- 属性定义

  无

- 方法定义

  无

- 事件定义

  无


##