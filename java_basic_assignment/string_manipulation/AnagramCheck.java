public class AnagramCheck {
    public static boolean areAnagrams(String str1, String str2) {
        if (str1.length() != str2.length()) {
            return false;
        }
        int[] count = new int[26];
        for (char ch : str1.toCharArray()) {
            count[ch - 'a']++;
        }

        for (char ch : str2.toCharArray()) {
            count[ch - 'a']--;
        }

        for (int num : count) {
            if (num != 0) {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        String str1 = "listen";
        String str2 = "silent";
        System.out.println("Are anagrams? " + areAnagrams(str1, str2));
    }
}

// Time Complexity: O(N)+O(N)+O(1)=O(N)
// Space Complexity: O(1)