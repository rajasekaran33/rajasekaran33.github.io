# Exception Handling 
### Dr.S.Rajasekaran AP-II/AI&DS/KCT
---

## 1. Introduction
- **Exception**: An event that disrupts the normal flow of a program.  
- Java uses exceptions to handle errors gracefully instead of crashing.  
- All exceptions and errors inherit from the **Throwable** class.  
- Two main categories: **Checked** and **Unchecked Exceptions**.

---

## 2. Exception Hierarchy

- **Throwable**  
  - **Error**  
    - Serious problems, not recoverable (e.g., `OutOfMemoryError`)  
  - **Exception**  
    - Recoverable problems  
    - Two categories:  
      - **Checked Exceptions**  
      - **Unchecked Exceptions (RuntimeException)**  

---
```
Throwable
├── Error
│    ├── OutOfMemoryError
│    └── StackOverflowError
└── Exception
├── Checked Exceptions
│    ├── IOException
│    └── SQLException
└── Unchecked Exceptions
├── NullPointerException
├── ArithmeticException
└── ArrayIndexOutOfBoundsException
```
---
## 3. Checked Exceptions
- Must be **declared** in method signature using `throws`.  
- Must be **handled** using `try-catch` or propagated.  
- Represent **external factors** beyond programmer’s control.  
---
### Common Examples
- `IOException`  
- `SQLException`  
- `ClassNotFoundException`
---
### Example 1: File Handling
```java
import java.io.*;

public class CheckedExample {
    public static void main(String[] args) {
        try {
            FileReader file = new FileReader("data.txt"); // may throw IOException
            BufferedReader reader = new BufferedReader(file);
            System.out.println(reader.readLine());
        } catch (IOException e) {
            System.out.println("File not found or error reading file.");
            e.printStackTrace();
        }
    }
}
```
---

### Unchecked Exceptions
- Occur at runtime.
- Not required to be declared or handled explicitly.
- Represent programming errors or logic flaws.
---
### Common Examples
- NullPointerException
- ArrayIndexOutOfBoundsException
- ArithmeticException
---
### Example 1: NullPointerException
```java
public class UncheckedExample {
    public static void main(String[] args) {
        String text = null;
        System.out.println(text.length()); // NullPointerException
    }
}
```
---

### Example 2: ArrayIndexOutOfBoundsException
```java
public class UncheckedExample2 {
    public static void main(String[] args) {
        int[] arr = new int[3];
        System.out.println(arr[5]); // ArrayIndexOutOfBoundsException
    }
}
```
### Example 3: ArithmeticException
```java
public class UncheckedExample3 {
    public static void main(String[] args) {
        int result = 10 / 0; // ArithmeticException: divide by zero
        System.out.println(result);
    }
}
```
---
### Key Differences 

| Aspect              | Checked Exceptions         | Unchecked Exceptions        |
|---------------------|----------------------------|-----------------------------|
| Compile-time check  | Yes                        | No                          |
| Must handle/declare | Yes                        | No                          |
| Common examples     | IO, SQL                    | NullPointer, Arithmetic     |
| Origin              | External factors           | Programming errors          |

---