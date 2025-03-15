public class SumOfEvens {
    public static void main(String[] args) {
        int sum = 0, num = 2;

        while (num <= 10) {
            sum += num;
            num += 2;
        }

        System.out.println("The sum of even numbers from 1 to 10 is: " + sum);
    }
}

// Time Complexity: O(1)
// Space Complexity: O(1)