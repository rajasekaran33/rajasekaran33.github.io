[Live](https://prod.liveshare.vsengsaas.visualstudio.com/join?E2E412AEA392F0801B93B9217609D1C903F1)
[OneC](https://onecompiler.com/java/44y7emcbk)

# 1 
```java
import java.util.Scanner;

public class Main {
    static int balance;
    public static void main(String[] args){
        int amount = 0;
        Scanner sc = new Scanner(System.in);
        balance=100; 
        
        
        do{
            amount = sc.nextInt();
            //if(amount>=0){
                if(amount%100 == 0 && amount>=0) balance = balance + amount;
            //}
            /*if(amount<=balance){
                
            }*/
            System.out.println("balance="+balance);
        }while(amount!=0);

        sc.close();
    }
}
``

# 2
```java
import java.util.Scanner;

class Wallet{
    private int balance;

    public void putMoney(int amount){
        this.balance = this.balance + amount;
    }
    public int getMoney(int amount){
        if(amount<=balance){
            this.balance = this.balance - amount;
            return amount;
        }
        return 0;
    }
    public void displayBalance(){
        System.out.println("balance="+this.balance);
    }

}


public class Main {
    static int balance;
    
    public static void main(String[] args){

        Wallet wallet = new Wallet();
        int amount = 0;
        Scanner sc = new Scanner(System.in);
        wallet.putMoney(100); 
        wallet.displayBalance();
        wallet.getMoney(200);
        wallet.displayBalance();
        wallet.displayBalance();

        sc.close();
    }
}
```