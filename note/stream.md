# stream 学习笔记

参考文章：https://nodesource.com/blog/understanding-streams-in-nodejs

中文：https://segmentfault.com/a/1190000021180266


流就像你吃一碗饭，如果你的嘴不够大，不能一口吃掉一整碗饭，就只好一口接着一口吃。就是这个过程就是流。


## 为什么要学习流？

  1. 流是Node.js中的一个很重要的概念，常用的nodejs打包工具（webpack,gulp ）都使用了流，


## 流的特点：

  1. 逐段读取，
  2. 适合处理大量数据，大文件。大于内存空间大小的文件，只能使用流，因为内存限制下不可能一次性读取整个文件。
  3. 流具有可组合性，可用来组合文件。比如js模块合并。比如一口一口吃饭的时候还可以吃菜。吃到肚子里的就是饭和菜的组合。


## 四种流：
  1. 可写（Writable）： 可以向其中写入数据的流。 [查看测试代码](../demo/streamDemo1.js);
  2. 可读（Readable）： 可以从中读取数据的流。 [查看测试代码](../demo/streamDemo2.js);
  3. 双工（Duplex）： 这种流，能读能写。
  4. 转换 (Transform) ： 可在写入和读取时修改或转换数据。比如压缩。

所有的stream对象都是EventEmitter实例。
  可监听的事件：data, end, error
  data事件在可读流中不断被触发。每次触发会向事件处理函数传入 chunk数据，chunk数据大小取决与缓冲区大小，默认16k
  缓冲区大小配置highWaterMark(单位是字节)：```fs.createReadStream('xxx',{highWaterMark:32})```  [查看测试代码](../demo/streamDemo3.js)



