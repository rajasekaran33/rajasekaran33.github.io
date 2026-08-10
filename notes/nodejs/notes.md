# Introduction to Node.js
### Dr.S.Rajasekaran
#### AP-II/AI&DS/KCT
---

## What is Node.js?
- Runtime environment for running JavaScript outside the browser.
- Built on Google Chrome’s V8 engine.
- Designed for fast, scalable network applications.
---

## Why Learn Node.js?
- **Single Language:** Use JavaScript for both frontend and backend.
- **Non‑blocking I/O:** Handles many requests at once without waiting.
- **Community & Ecosystem:** Huge library of packages via **npm (Node Package Manager)**.
- **Real‑world use:** Powers apps like Netflix, LinkedIn, PayPal.

---
### Event‑Driven Architecture
- Uses an event loop to process tasks asynchronously.
- Example: Reads files without blocking other code.
![](https://media.geeksforgeeks.org/wp-content/uploads/20211017211104/EDP1drawio-660x305.png)
---
### Modules
- Built‑in: fs, http, path.
- External: install with npm install <package>.
- Example: npm install express. 
![](https://media.geeksforgeeks.org/wp-content/uploads/20260312180649531204/types_of_modules.webp)
---
### npm (Node Package Manager)  
   - Command line tool to install and manage packages.  
   - Example: `npm install express`.
---
# Setup Node.js Server on Windows
---
### Step 1: Install Node.js
- Go to https://nodejs.org
- Download the LTS (Recommended) version for Windows
- Run the installer → click Next → keep defaults → finish
- Verify installation: (Open CMD Prompt and type)
```bash
node -v
v24.18.1 (node version)

npm -v
11.16.0 (npm version)
```
---
### Step 2: Create a Project Folder
- Open File Explorer → make a folder, e.g., node-server
- Open Command Prompt / PowerShell in that folder:
```bash
  cd path\to\node-server
```
---
### Step 3: Initialize Project
```bash
npm init -y (This creates a package.json file)
```
#### package.json
```json
{
  "name": "example",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "commonjs"
}

```
---
### Step 4: Create Server File
- Create a file server.js with following content
```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World from Node.js!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
```
[code-example](code-examples/01-hello-node-js)
---
## Step 5: Run the Server
```bash
node server.js
```
- (Open browser → visit http://localhost:3000)
---

