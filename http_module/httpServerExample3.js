const http = require('http');
const fs = require('fs');

const PORT = 3000;
const server = http.createServer((request, response) => {
    // 구조분해 할당
    const { url, method } = request;
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    let inputStream = null;

    // url과 요청 방식을 분석해서 코드에서 직접 라우팅
    if (url === "/" && method === "GET") {
        response.statusCode = 200;
        inputStream = fs.createReadStream(__dirname + "/index.html", "utf-8");
        inputStream.pipe(response);
    } else if (url === "/about" && method === "GET") {
        response.statusCode = 200;
        inputStream = fs.createReadStream(__dirname + "/about.html", "utf-8");
        inputStream.pipe(response);
    } else if (url === "/today" && method === "GET") {
        const today = new Date().toLocaleString();
        // response.statusCode = 200;
        response.writeHeader(200, {"content-Type" : "text/html; charset=utf-8"});
        response.end(`<h1>${today}</h1>`);

    } else {
        response.statusCode = 404;
        response.end("요청하신 페이지를 찾을 수 없습니다.");
    }
});

server.listen(PORT, () => {
    console.log(`${PORT}번 포트에서 서버 리스닝 중...`);
});

