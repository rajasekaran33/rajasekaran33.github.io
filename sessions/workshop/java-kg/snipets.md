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