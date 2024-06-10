const http = require('http');
const fs = require('fs');

const PORT = 3000;
const server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    const inputStream = fs.createReadStream(__dirname + "/index.html", "utf-8");
    inputStream.pipe(response);
});

server.listen(PORT, () => {
    console.log(`${PORT}번 포트에서 서버 리스닝 중...`);
});

