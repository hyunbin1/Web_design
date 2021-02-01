let http = require('http');
let fs = require('fs');
let app = http.createServer(function (request, response) {
    let url = request.url;
    if (request.url == '/') {
        url = '/index.html';
    }
    if (request.url == '/favicon.ico') {
        response.writeHead(404);
        response.end();
        return;
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));

});
app.listen(3000);

// 프로토콜://host(domain name).com:포트번호(3000)/path-파일 위치(main)?query string(id=Html&page=12)