const http = require('http');
 
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
 
  // Serve a simple HTML page as a string
  const page = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>My Simple Page</title>
      </head>
      <body>
        <h1>Hello from Node.js</h1>
        <p>This is a simple page served as a string.</p>
      </body>
    </html>
  `;
 
  res.end(page);
});
 
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});

