public class ExceptionHandlingExample {
    public static void main(String[] args) {
        try {
            int a = 10, b = 0;
            int result = a / b; // This will cause an exception
            System.out.println("Result: " + result);
        } catch (ArithmeticException e) {
            System.out.println("Error: Division by zero is not allowed.");
        } finally {
            System.out.println("Execution completed.");
        }
    }
}
