public class CountVowels {
    public static int countVowels(String str) {
        int count = 0;
        str = str.toLowerCase();

        for (char ch : str.toCharArray()) {
            if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
                count++;
            }
        }
        return count;
    }

    public static void main(String[] args) {
        String input = "Hello World";
        System.out.println("Vowel count: " + countVowels(input));
    }
}

// time complexity is O(N)
// space complexity is O(N)