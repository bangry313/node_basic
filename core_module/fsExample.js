
const fs = require('fs');
// 동기 처리로 현재 디렉터리의 파일 목록 출력
const listFilesSync = function() {
   const fileList = fs.readdirSync("./");
   console.log(`현재 디렉터리의 파일 목록 : ${fileList}`);
}

// 비동기 처리로 현재 디렉터리의 파일 목록 출력
const listFiles = function() {
   fs.readdir("./", (err, fileList) => {
      if(err){
         console.error(err);
      }
      console.log(`현재 디렉터리의 파일 목록 : ${fileList}`);
   });
}

function main() {
   listFilesSync();
   listFiles();
}
main();

