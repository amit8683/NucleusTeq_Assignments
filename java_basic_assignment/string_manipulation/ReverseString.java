public class ReverseString {
    public static String reverse(String str) {
        char[] charArray = str.toCharArray();
        int left = 0, right = charArray.length - 1;
        
        while (left < right) {
            // Swap characters
            char temp = charArray[left];
            charArray[left] = charArray[right];
            charArray[right] = temp;
            
            left++;
            right--;
        }
        
        return new String(charArray);
    }

    public static void main(String[] args) {
        String input = "Hello";
        System.out.println("Original: " + input);
        System.out.println("Reversed: " + reverse(input));
    }
}

// Time Complexity: O(N) + O(N) + O(N) = O(N)
// Space Complexity:O(N) + O(N) + O(1) = O(N)