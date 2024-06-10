
const http = require('http');

const members = {
    result: "OK",
    list: [{ id: "monday" }, { id: "tuesday" }, { id: "wednesday" }]
};

const PORT = "3000";
const server = http.createServer((request, response) => {
    const { url, method } = request;
    try {
        if (url === "/member" && method === "GET") {
            response.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
            response.end(JSON.stringify(members));
        } else {
            response.writeHead(404);
            response.end('NOT FOUND');
        }
    } catch (error) {
        console.error(error);
        response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        response.end(error.message);
    }
});

server.listen(PORT, () => {
    console.log(`${PORT}번 포트에서 서버 리스닝 중...`);
});

