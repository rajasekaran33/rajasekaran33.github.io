const http = require('http');
 
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  let page = "";
  if(req.url === '/'){
    page = `
    <h1>Home Page</h1><br>
    <a href="/page2">Page 2</a>
    `; 
  }
  else if(req.url === '/page2'){
    page = "<h1>Page2</h1>";
  }
  res.end(page);
});
 
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});

