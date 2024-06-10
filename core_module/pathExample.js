
const path = require('path');

// 운영체제별 경로 구분자
console.log(path.sep);

console.log(__filename); // C:\ezen-fullstack\workspace\node-basic\core_module\pathExamnple.js
console.log(__dirname);  // C:\ezen-fullstack\workspace\node-basic\core_module 

// 주요 메서드 
console.log(path.dirname(__filename));  // C:\ezen-fullstack\workspace\node-basic\core_module
console.log(path.basename(__filename)); // pathExample.js
console.log(path.basename(__filename, ".js")); // pathExample
console.log(path.extname(__filename)); // .js

let pathObject = path.parse("/home/user/dir/file.txt");
console.log(pathObject); // {  root: '/',  dir: '/home/user/dir',  base: 'file.txt',  ext: '.txt',  name: 'file' }

let myPath = path.format(pathObject);
console.log(myPath); // / home/user/dir/file.txt

myPath = path.join("/this", "is", "a", "////path//", "join");
console.log(myPath); // \this\is\a\path\join

myPath = path.normalize("/this/is/////////a//my/.././path/normalize");
console.log(myPath); // \this\is\a\path\normalize

// cwd를 사용하여 절대경로 반환
myPath = path.resolve("/this", "is/a", "../.", "path", "resolve");
console.log(myPath); // C:\this\is\path\resolve

myPath = path.resolve("myroot", "static/png/", "../gif/image.gif");
console.log(myPath); // C:\ezen-fullstack\workspace\node-basic\myroot\static\gif\image.gif

