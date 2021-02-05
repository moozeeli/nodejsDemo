//利用可读流和可写流复制文件：

const fs = require('fs');

const rds =  fs.createReadStream('./static/data.txt')
const wts = fs.createWriteStream('./static/copyData.txt');

rds.on('data',chunk=>{
  wts.write(chunk)
})

rds.on('end',()=>{
  console.log('复制成功');
})

