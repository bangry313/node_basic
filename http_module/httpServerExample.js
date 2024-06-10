const http = require('http');

const server = http.createServer((request, response) => {
    console.log(request);
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
        //response.write('<h2>Hell, Web client</h2>');
        response.end('<h2>Hell, Web client</h2>', () => {
            console.log("밥 먹고 합시다....");
        });
    }
);

server.listen(3000, () => {
    console.log("3000번 포트에서 서버 실행 중...");
});

