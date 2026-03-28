class Solution {
    public int characterReplacement(String s, int k) {
        int[] charCounts = new int[26];
        int maxFrequency = 0;
        int left = 0;
        int maxLength = 0;

        for (int right = 0; right < s.length(); right++) {
            // 1. Add the current character to our window's count
            char currentChar = s.charAt(right);
            charCounts[currentChar - 'A']++;
            
            // 2. Update the maximum frequency of a single character in the current window
            maxFrequency = Math.max(maxFrequency, charCounts[currentChar - 'A']);
            
            // 3. Check if the current window is valid
            // Window length is (right - left + 1)
            if ((right - left + 1) - maxFrequency > k) {
                // 4. If invalid, shrink the window from the left
                char leftChar = s.charAt(left);
                charCounts[leftChar - 'A']--;
                left++;
            }
            
            // 5. Update the maximum length found so far
            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength;
    }
}