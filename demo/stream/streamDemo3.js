const fs = require('fs');

const rds =  fs.createReadStream("./static/12kb.txt",{
  encoding:"utf-8",
  highWaterMark:6 // 单位是字节
})

rds.on('data',chunk=>{
  console.log(chunk); // 输出两次
})

rds.on('end',()=>{
  console.log('end');
})

