# Introduction to Node.js
---

## What is Node.js?
- **Definition:** Node.js is a **runtime environment** that lets you run JavaScript outside the browser.
- **Built on:** Google Chrome’s **V8 JavaScript engine**.
- **Purpose:** Originally designed for building **fast, scalable network applications**.

---

## Why Learn Node.js?
- **Single Language:** Use JavaScript for both frontend and backend.
- **Non‑blocking I/O:** Handles many requests at once without waiting.
- **Community & Ecosystem:** Huge library of packages via **npm (Node Package Manager)**.
- **Real‑world use:** Powers apps like Netflix, LinkedIn, PayPal.

---
## Core Concepts
1. **Event‑Driven Architecture**  
   - Node.js uses an **event loop** to handle requests asynchronously.  
   - Example: Instead of waiting for a file to load, Node.js continues executing other code.  
   ![](https://media2.dev.to/dynamic/image/width=500,height=210,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Focb53aaqp7ut61gihn73.jpg)
---
2. **Modules**  
   - Built‑in modules like `fs` (file system), `http`, `path`.  
   - You can also install external modules using `npm`.
---
3. **npm (Node Package Manager)**  
   - Command line tool to install and manage packages.  
   - Example: `npm install express`.
---


```javascript
http = require('http')
fs = require('fs')  
url = require('url');
server = http.createServer((req,res)=>{
    
    if(req.url === '/'){
        fs.readFile("index.html", (er,fileContent)=>{
            res.writeHead(200,{'Content-Type':'text/html'})
            res.end(fileContent.toString());
        })  
    }
    else if(req.url.startsWith('/process')){
        const myUrl = new URL(req.url, "http://${req.headers.host}");
        const name = myUrl.searchParams.get('username');
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end("<h1> Hello "+name+"</h1>");
    }
```
---
![](image.png)
---