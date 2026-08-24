account = {
    id: 1,
    name: "raja",
    balance: 1000
}
function getBalance(){
    return account.balance;
}

function getId(){
    return account.id;
}
function getName(){
    return account.id;
}

function deposit(amount){
    account.balance+=amount;
}
function withdraw(amount){
    account.balance-=amount;
}

http = require('http')
server = http.createServer((req,res)=>{
    if(req.url === "/" && req.method === "GET"){
        res.writeHead(200, {"Content-Type":"application/json"})
        res.end(JSON.stringify(account))
    }
    else if(req.url === "/name" && req.method === "GET"){
        res.writeHead(200, {"Content-Type":"application/json"})
        let {name} = account;
        res.end(JSON.stringify({name}))
    }
    else if(req.url === "/balance" && req.method === "GET"){
        res.writeHead(200, {"Content-Type":"application/json"})
        let {balance} = account;
        res.end(JSON.stringify({balance}))
    }
    else if(req.url.startsWith("/deposit") && req.method === "GET"){
        res.writeHead(200, {"Content-Type":"application/json"})
        const depURL = new URL(req.url, `http://${req.headers.host}`);
        let amount = depURL.searchParams.get("amount");
        amount = parseInt(amount);
        deposit(amount);
        let {balance} = account;
        res.end(JSON.stringify({balance}))
    }

    else if(req.url.startsWith("/withdraw") && req.method === "GET"){
        res.writeHead(200, {"Content-Type":"application/json"})
        const depURL = new URL(req.url, `http://${req.headers.host}`);
        let amount = depURL.searchParams.get("amount");
        amount = parseInt(amount);
        withdraw(amount);
        let {balance} = account;
        res.end(JSON.stringify({balance}))
    }
});

server.listen(3000)

fetch("http://localhost:3000/withdraw?amount=300")
.then(response=>response.json())
.then(content=>console.log(content))