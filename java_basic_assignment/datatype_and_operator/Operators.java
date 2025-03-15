import java.util.Scanner;

public class Operators{
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Taking input
        System.out.print("Enter first number: ");
        int a = scanner.nextInt();
        System.out.print("Enter second number: ");
        int b = scanner.nextInt();

        // Arithmetic Operators
        System.out.println("Arithmetic Operations:");
        System.out.println("Addition: " + (a + b));
        System.out.println("Subtraction: " + (a - b));
        System.out.println("Multiplication: " + (a * b));
        System.out.println("Division: " + (a / b));
        System.out.println("Modulus: " + (a % b));

        // Relational Operators
        System.out.println("\nRelational Operations:");
        System.out.println("a == b: " + (a == b));
        System.out.println("a != b: " + (a != b));
        System.out.println("a > b: " + (a > b));
        System.out.println("a < b: " + (a < b));

        // Logical Operators
        boolean condition1 = (a > 0);
        boolean condition2 = (b > 0);
        System.out.println("\nLogical Operations:");
        System.out.println("a > 0 && b > 0: " + (condition1 && condition2));
        System.out.println("a > 0 || b > 0: " + (condition1 || condition2));
        System.out.println("!(a > 0): " + !condition1);

        scanner.close();
    }
}

// Time Complexity: O(1)
// Space Complexity: O(1)