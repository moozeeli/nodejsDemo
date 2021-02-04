const fs = require('fs');

const rds =  fs.createReadStream('./static/data.txt')

let allData= ''
rds.on('data',chunk=>{
  allData+=chunk;
  console.log(chunk)
})

rds.on('end',()=>{
  console.log('读取成功',allData);
})

