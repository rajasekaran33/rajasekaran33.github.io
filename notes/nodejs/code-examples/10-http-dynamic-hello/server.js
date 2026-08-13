const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile("index.html", (err, data) => {
      if (err) {
        console.log('index.html not found');
        res.end("<h1>home page not found</h1>");
      }
      else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data.toString());
      }
    })
  }
  else if (req.url.startsWith("/process")) {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const parms = url.searchParams;
    const username = parms.get('username');
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<h1> Hello ${username}</h1>`);
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
