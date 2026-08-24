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
    return accounts.filter(acc=>acc.balance>amount)
}

function deleteAccount(id){
    accounts = accounts.filter(acc=>acc.id!==id)
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
console.log(getAccountById(2))
deposit(2,3000)
console.log(getAccountById(2))



