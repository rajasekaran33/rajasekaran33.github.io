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

console.log(getBalance());
deposit(100)
console.log(getBalance());
withdraw(300)
console.log(getBalance());
