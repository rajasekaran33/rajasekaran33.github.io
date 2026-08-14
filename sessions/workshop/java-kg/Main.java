import java.util.Scanner;
class Wallet{
    private int balance;
    public void putMoney(int amount){
        if(amount>0){
            this.balance = this.balance + amount;
        }
    }
    public void process(){
        int[] notes = {50,20,10,100,200};
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
        //wallet.displayBalance();
        //wallet.getMoney(200);
        //wallet.displayBalance();
        //wallet.displayBalance();

        wallet.displayBalance();

        sc.close();
    }
}