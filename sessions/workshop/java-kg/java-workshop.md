# Workshop
#### on
## OOP in the Era of AI-Assisted Software Development
### Dr.S.Rajasekaran
#### AP-II/AI&DS/KCT
---
## Myth Busters: Programming & AI
---
### Myth 1"AI makes coding obsolete."  
---
**Reality**: AI assists coding, but humans still need to design logic, structure, and solve problems creatively.
---
### Myth 2: "You don’t need fundamentals if AI writes code."  
---
**Reality**: Without fundamentals, you can’t debug, optimize, or even verify AI-generated code.
---
### Myth 3: "Programming is just syntax memorization."  
---
**Reality**: It’s about problem-solving, algorithms, and logical thinking — syntax is secondary.
---
### Myth 4: "Only advanced AI/ML skills matter now."  
**Reality:** AI/ML models themselves rely on core programming concepts like data structures, recursion, and optimization.
---
### Myth 5: "AI will always give correct solutions."  
---
Reality: AI can produce flawed or inefficient code; fundamentals help you spot and fix errors.
---
### Myth 6: "Programming is outdated in modern tech careers."  
---
**Reality**: Employers still test fundamentals — they’re timeless skills that transfer across tools and technologies.
---
![](https://i.programmerhumor.io/2025/09/59e874279e55b0fb13431d1157e95a026c0b0a1a07cf1f5335e60ecbe2633bef.jpeg)
---
![](https://i.programmerhumor.io/2026/05/36dea4bdbd00a15e9d52805731d2f1508e8985ee9fe4c298deae043c3a874edb.jpeg)
---
## Why Java?
---
| Aspect              | Why Java Matters                                      |
|---------------------|-------------------------------------------------------|
| Enterprise Use      | Banking, telecom, healthcare, government              |
| Cross-Platform      | JVM portability across billions of devices            |
| Cloud Integration   | Strong with AWS, Azure, GCP, Kubernetes               |
| Modern Features     | Virtual threads, pattern matching, records            |
---
| Aspect              | Why Java Matters                                      |
|---------------------|-------------------------------------------------------|
| Security            | Robust frameworks, cryptographic libraries            |
| AI/Big Data         | Hadoop, Spark, Kafka, orchestration layers            |
| Career Demand       | Still top backend skill in 2026                       |
---
## Why OOP?
---

| Aspect             | Why OOP Matters Today                                      |
|--------------------|------------------------------------------------------------|
| Modularity         | Easier debugging and collaboration                         |
| Reusability        | Classes/components reused across projects                  |
| Scalability        | Supports large, complex systems                            |
| Maintainability    | Changes in one part don’t break the whole system           |
| Real-world Modeling| Natural way to represent entities (bank accounts, products, users) |

--- 

| Reason               | How                                                       |
|----------------------|-----------------------------------------------------------|
| Real-world Mapping   | Objects represent entities like Car, Customer, Order      |
| Human-like Thinking  | Groups attributes and actions naturally                   |
| Clear Structure      | Organizes code into logical, understandable units         |
| Collaboration        | Teams can work on different classes independently         |
| Scalability          | Objects can be extended, reused, and combined             |
| Problem-Solving Flow | Encourages thinking in terms of responsibilities & interactions |

---
# Where to Start ?
---
0. Print `Hello World`
---
#### Lets start with a simple Object
![](https://img.magnific.com/free-vector/wallet-flat-style_78370-7135.jpg?semt=ais_test_b&w=740&q=80)
---
1. Print the number 100.
---
2. Print the string "balance".
---
3. Print the text "balance=100".
---
4. Create a variable balance, assign it the value 100, and print balance.
---
5. Read balance from the user using Scanner and set and print balance.
---
6. Move balance outside the main method and print it.
---
7. Add 50 to balance and print the updated balance.
---
8. Read an amount to be added, update balance, and print it.
---
9.  Check if balance is greater than 500; print "Yes" or "No".
---
10.  Read an amount to be deducted, update balance, and print it.
---
11.  Read an amount to be deducted; check if the requested amount is less than balance. Deduct only if available.
---
12.  Accept 5 repeated user additions, update balance, and print after each addition.
---
13.  Accept 5 repeated user deductions, update balance, and print after each deduction.
---
14.  Read N from the user; accept N additions, update balance, and print after each addition.
---
15.  Read N from the user; accept N deductions, update balance, and print after each deduction. Do not deduct if the requested amount is greater than balance.
---
16.  Read user requests for addition until the user enters 0. Update and print balance after each addition. Do not accept negative numbers.
---
17.  Read user requests for deduction until the user enters 0. Update and print balance after each deduction. Do not accept negative numbers.
---
18.  Read user requests for addition until the user enters 0. Accept only amounts that are multiples of 100. Reject smaller denominations (10, 20, 50) with a friendly message. Do not accept negative numbers.
---
19.  Read user requests for deduction until the user enters 0. If the user tries to deduct less than 200, exit the loop. Do not accept negative numbers.
---
20.  Create a method displayBalance() to print the balance.
---
21.  Create a method getBalance() to return the balance and print it.
---
22.  Create a method putMoney(int amount) to accept an amount, update the balance, and print the balance after update. Handle negative amounts properly.
---
23.  Create a method getMoney(int amount) to accept an amount. Return the amount if balance is sufficient; otherwise return 0. Print the balance after update. Handle negative amounts properly.
---
24.  Create a method isBalanceAvailable(int amount) to return true if balance is greater than the requested amount, otherwise return false.
---
25.  Modify putMoney to accept only standard Indian denominations (1, 2, 5, 10, 20, 50, 100, 200, 500).
---
26.  Introduce an array pocket that can hold 5 banknotes [100,200,100,500,50]. Calculate total balance by summing the array values.
---
27.  Expand the pocket array to length 10 and add 10 banknotes.
---
28.  Keep the pocket array length 10, but allow empty slots (e.g., [10,50,50,200,0,0,0,0,0,0]).
---
29.  Modify putMoney to accept only standard denominations and update the pocket array accordingly. Maximum limit is 10 notes. Reject invalid denominations or if the array is full.
---
30.  Modify getBalance to calculate the sum of the pocket array whenever balance is requested.
---
31.  Modify getMoney to deduct the requested amount if available. Remove notes from the pocket array (set positions to zero).
---
32.  Create a method organize() to move all zeros in the pocket array to the right.
---
33.  Create a method sortOrganize() to sort the pocket array and move all zeros to the right.
---
36.  Redefine pocket to hold counts of notes instead of note values. Use 10 positions [1,2,5,10,20,50,100,200,500,0]. Example: [0,0,3,2,2,1,3,1,2,0].
---
37.  Modify getBalance to work with the new pocket structure.
---
38.  Modify putMoney to work with the new pocket structure.
---
39.  Modify getMoney to work with the new pocket structure.
---
40.  Create a method isValidAmount(int amount) to return true if the amount is positive and a valid denomination.
---
41.  Overload putMoney to accept an array of notes (e.g., [50,20,100,50]). Validate each note using isValidAmount.
---
42.  Overload putMoney to accept non-standard amounts (e.g., 1156) and split into valid denominations with minimal notes (e.g., [500,500,100,50,5,1]).
---
43.  Overload getMoney to return an array of notes when an amount is requested. Update the pocket array accordingly.
---
44.  Stop positional mapping with note values. Handle notes directly. If the limit of 10 notes is reached, expand capacity by another 10 using expandCapacity() - introduce this method.
---
45. Create a method isDenominationAvailable(int value) to return true if the denomination is available, otherwise false.
---
46.  Create a method getNoOfDenominations(int value) to return the number of notes of that denomination. Return 0 if not available.
---
47.  Create a method getAvailableSumOfDenomination(int value) to return the total sum of notes of that denomination.
---
48.  Create a method isNoOfDenominationsAvailable(int[] values) to return an array of true/false for each denomination requested.
---
49.  Create a method getAvailableSumOfDenominations(int[] values) to return an array of sums for each denomination requested.
---
50.  Create a method isNoOfDenominationAvailable(int value, int count) to return true if the requested number of notes is available, otherwise false.
---
51.  Create a method getMoneyInDenomination(int amount, int value) to return notes if the amount is available and denominations exist.
---
52.  Create a method getMoneyInDenominations(int amount, int[] values) to return notes if the amount is available and denominations exist. Ensure at least one note from the requested values(denominations) is included.
---
53.  Refactor Main.java: it should not act as a wallet. Create a new class named Wallet that groups all variables and methods. Replace static variables/methods with instance variables/methods.
---
54.  Create a method setBalance(int amount) that sets the balance value.
---
55.  Overload setBalance to accept an array of notes/coins, compute the sum, and set it as the balance.
---
56.  Define a default constructor for Wallet that initializes balance to 0 and creates a pocket array of length 10 filled with zeros.
---
57.  Overload the Wallet constructor to accept an array of notes. Store the notes in the pocket array, compute the sum, and assign it to balance.
---
58.  Overload the Wallet constructor to accept an amount. Split the amount into valid denominations (minimal number of notes/coins), store them in the pocket array, and expand the array if needed.
---
59.  Keep balance and pocket as private fields inside Wallet (encapsulation).
---
60.  Keep Wallet methods safe: expose only essential methods to the outside world. Rewrite the previous flow using encapsulation principles.
---
61.  Create PhotoFrameWallet with methods setPhoto(String), getPhoto(). Keep photo as a String name.
---
62.  Create LockableWallet with methods lock(), unlock(), and a boolean field for lock status.
---
63.  Create a PhotoFrameWallet that also has lock features (combine photo + lock).
---
64.  Inherit from both: create LockablePhotoFrameWallet that extends PhotoFrameWallet and adds lock/unlock functionality.
---
65.  Create DigitalWallet with a PIN feature. This is an extension of Wallet, but you need to redo all methods to enforce PIN checks before deposits/withdrawals.
---
66.  Create AbstractWallet as an abstract class. Do not define methods you cannot implement — leave them abstract (e.g., putMoney(), getMoney()). Subclasses must implement them.
---
67.  Create SecureWallet as an interface. Define security‑specific functionality (e.g., lock(), unlock(), isLocked()). Rewrite subclasses to implement this interface where relevant.
---
68.  Create a Payment interface with a single method pay(double amount).
---
69.  Implement a Card class that implements Payment → pay() prints “Paid using Card”.
---
70.  Implement a UPI class that implements Payment → pay() prints “Paid using UPI”.
---
71.  Implement a Wallet class that implements Payment → pay() deducts from balance and prints remaining balance.
---
72.  Demonstrate polymorphism: Payment p = new Card(); p.pay(100); → shows platform‑free transactions.
---
73.  Create an Account class with fields: accountNumber, balance, pin.
---
74.  Create a Card class linked to an Account.
---
75.  Create a BankNote class to represent denomination in ATM (e.g., 2000, 500, 100).
---
76.  Create an ATM class with methods: withdraw(), deposit(), checkBalance().
---
77.  Integrate Wallet transactions into ATM (deposit/withdraw from wallet).
---
78.  Add menu‑driven simulation in ATM (user chooses options).
---
79.  Connect Card → Account → ATM for real transaction flow.
---
80.  Show object collaboration: ATM uses Card, verifies Account, dispenses BankNotes.
---
81.  Create BalanceNotAvailableException → thrown when withdrawal > account balance.
---
82.  Create NoDenominationsAvailableException → thrown when ATM cannot dispense requested amount.
---
83.  Create InvalidPINException → thrown when PIN entered is wrong.
---
84.  Create DailyLimitExceededException → thrown when withdrawal exceeds daily limit.
---
85.  Add try–catch blocks in ATM methods to handle exceptions gracefully.
---
86.  Print user‑friendly messages for each exception (e.g., “Insufficient balance”, “Invalid PIN”).
---
87.  Check if PIN input is empty → use isEmpty()  
---
88.  Remove leading/trailing spaces before validation → use trim()  
---
89.  Validate PIN length → use length()  
---
90.  Ensure all characters are digits → use charAt() + Character.isDigit()  
---
91.  Validate PIN format with regex → use matches("\\d{4}")  
---
92.  Compare entered PIN with stored PIN → use equals()
---
93.  Read account details from a text file (account.txt)
---
94.  Update account balance after successful transactions (deposit/withdrawal)
---
95.  Handle account data in CSV format (store multiple accounts with fields like AccountNo,Name,Balance)
---
96.  Create a Bank class that manages multiple accounts stored in CSV files
---
97.  Make the Bank class Serializable so accounts can be stored and retrieved as binary objects (independent of CSV)
---
98.  Replace Array of Account with Array List
---
99.  Bank can create accounts - create a method createAccount() → add new account
---
100.  Bank can check account findAccount() → search by account number and printAccounts() → list all accounts
---
101.   Bank can handle deposit() and withdraw()
---
102.   Bank can serializeBank() / deserializeBank() → handle binary persistence
---