// 引入 events对象， 创建eventEmitter对象
var events = require('events');
var eventEmitter = new events.EventEmitter();

// 事件处理函数
var connectHandler = function connected(){
  console.log('connect')
}

eventEmitter.on('connect',connectHandler)

// 触发事件
eventEmitter.emit('connect');
console.log('执行完毕');