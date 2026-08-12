const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if(req.url === '/'){
    fs.readFile("index.html",(err,data)=>{
      if(err){
        console.log(error);
        
        res.end("<h1>home page not found</h1>");
      }
      else{
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end(data.toString());
      }
    })
  }
  else if(req.url.startsWith("/process")){
    const url = new URL(req.url, "http://${req.headers.host}");
    if(req.method === "GET"){
      const parms = url.searchParams
      const username = parms.get('username');
      res.writeHead(200, {'Content-Type':'text/html'});
      res.write(`<h3> Hello ${username}</h3>`);
      res.end(`<b> handled as get`);
    }
    else if(req.method === "POST"){
      let body = "";
      req.on('data', chunk => {
        body+=chunk.toString();
      })
      req.on('end', ()=>{
        const parms = new URLSearchParams(body);
        const username = parms.get('username');
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(`<h3> Hello ${username}</h3>`);
        res.end(`<b> handled as post`);
      });
      
    }
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
