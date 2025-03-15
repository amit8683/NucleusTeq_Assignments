import java.util.Scanner;

public class FactorialCalculator {
    public static int factorial(int n) {
        if (n == 0 || n == 1) return 1;
        return n * factorial(n - 1);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Enter a number to find its factorial: ");
        int num = scanner.nextInt();
        
        System.out.println("Factorial of " + num + " is " + factorial(num));

        scanner.close();
    }
}

// Time Complexity: O(n) (each recursive call processes one number)
// Space Complexity: O(n) (recursion depth contributes to stack space)