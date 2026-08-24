accounts = [
    {id: 1,name: "raja",balance: 1000},
    {id: 2,name: "shiva",balance: 2000},
    {id: 3,name: "bala",balance: 1500}
]

function getAccounts(){
    return accounts;
}
function getAccountById(id){
    return accounts.find(acc=>acc.id===id);
}
function getAccountsBalanceMorethan(amount){
    return accounts.filter(acc=>acc.balance>=amount)
}

function deleteAccount(id){
    accounts = accounts.filter(acc=>acc.id===id)
}
function deposit(id, amount){
    account = accounts.find(acc=>acc.id===id)
    if(account){
        account.balance += amount;
    }
}

function withdraw(id, amount){
    account = accounts.find(acc=>acc.id===id)
    if(account){
        if(account.balance>=amount){
            account.balance -= amount;
        }
    }
}



http = require('http')
server = http.createServer((req,res)=>{

    const accountRegex = /account\/(\d+)$/;
    const balanceRegex = /account\/(\d+)\/balance$/
    const depositRegex = /account\/(\d+)\/deposit\/(\d+)$/;
    const withdrawRegex = /account\/(\d+)\/withdraw\/(\d+)$/;


    if(req.url === "/accounts" && req.method === "GET"){
        res.writeHead(200, {"Content-Type":"application/json"})
        res.end(JSON.stringify(accounts))
    }
    
    else if(accountRegex.test(req.url) && req.method === "GET"){
        console.log("acco");
        let id = parseInt(req.url.match(accountRegex)[1]);
        let account = accounts.find(acc=>acc.id===id);
        res.writeHead(200, {"Content-Type":"application/json"})
        res.end(JSON.stringify(account))
    }
    else if(balanceRegex.test(req.url) && req.method === "GET"){
        console.log("bal");
        let id = parseInt(req.url.match(balanceRegex)[1]);
        let account = accounts.find(acc=>acc.id===id);
        let {balance} = account;
        res.writeHead(200, {"Content-Type":"application/json"})
        res.end(JSON.stringify({balance}))
    }
    else if(depositRegex.test(req.url) && req.method === "GET"){
        console.log("depo")
        let id = parseInt(req.url.match(depositRegex)[1]);
        let account = accounts.find(acc=>acc.id===id);
        if(account){
            amount = parseInt(req.url.match(depositRegex)[2]);
            deposit(id,amount);
            res.writeHead(200, {"Content-Type":"application/json"})
            let {balance} = account;
            res.end(JSON.stringify({balance}))
        } 
    }

    else if(withdrawRegex.test(req.url) && req.method === "GET"){
        console.log("with")
        let id = parseInt(req.url.match(withdrawRegex)[1]);
        let account = accounts.find(acc=>acc.id===id);
        if(account){
            amount = parseInt(req.url.match(withdrawRegex)[2]);
            withdraw(id,amount);
            res.writeHead(200, {"Content-Type":"application/json"})
            //let {balance} = account;
            res.end(JSON.stringify(account))
        } 
    }
});

server.listen(3000)


