import java.util.Scanner;

public class FibonacciSequence {
    public static void fibonacci(int n) {
        int a = 0, b = 1;
        while (a <= n) {
            System.out.print(a + " ");
            int temp = a;
            a = b;
            b = temp + b;
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Enter a number to generate Fibonacci sequence up to: ");
        int num = scanner.nextInt();
        
        fibonacci(num);
        
        scanner.close();
    }
}

// Time Complexity: O(log n)
// Space Complexity: O(1) 