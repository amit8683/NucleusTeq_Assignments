import java.util.Scanner;

public class Patteren {
    public static void trianglePattern(Scanner scanner) {
        System.out.print("Enter the number of rows for the triangle: ");
        int rows = scanner.nextInt();

        for (int i = 1; i <= rows; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }

    public static void squarePattern(Scanner scanner) {
        System.out.print("Enter the size of the square: ");
        int size = scanner.nextInt();

        for (int i = 0; i < size; i++) {
            for (int j = 0; j < size; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        trianglePattern(scanner);
        squarePattern(scanner);

        scanner.close();
    }
}

// Triangle Pattern:
// Time Complexity:O(n2)
// Space Complexity:𝑂(1)

// Square Pattern:
// Time Complexity:O(n2)
// Space Complexity:𝑂(1)