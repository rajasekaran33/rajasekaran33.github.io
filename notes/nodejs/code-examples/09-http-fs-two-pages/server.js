const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    
    fs.readFile('index.html', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error loading page');
      } 
      else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data.toString());
      }
    });
  }
  else if(req.url === '/seemore'){
    fs.readFile('page2.html', (err, data) => {
      
      if (err) {
        
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error loading page');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data.toString());
      }
    });
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
