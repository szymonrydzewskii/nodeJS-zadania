const http = require('http');
const fs = require('fs');
const path = require('path');


const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const filename = url.searchParams.get('file');

    if (!filename) {
        res.writeHead(400, {"content-Type": "text/plain"});
        res.end('podaj nazwę pliku jako parametr w URL (np. ?file=example.txt).');
        return;
    }

    const filePath = path.join('./file-watcher', filename);

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, {"content-Type": "text/plain"});
            res.end('plik nie został znaleziony.');
            return;
        }

        res.writeHead(200, {"content-Type": "text/plain"});
        res.end(data);
    });
});

server.listen(3000, () => {
    console.log(`serwer działa na http://localhost:3000`);
});