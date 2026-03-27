class Solution {
    /**
     * @param String $s
     * @return Integer
     */
    function lengthOfLongestSubstring($s) {
        $maxLength = 0;
        $left = 0;
        // Array to act as a hash map for character indices
        $charIndexMap = [];
        $length = strlen($s);

        for ($right = 0; $right < $length; $right++) {
            $currentChar = $s[$right];

            // If character exists in map and is within the current window bounds
            if (array_key_exists($currentChar, $charIndexMap) && $charIndexMap[$currentChar] >= $left) {
                // Move the left pointer forward
                $left = $charIndexMap[$currentChar] + 1;
            }

            // Update the index of the current character
            $charIndexMap[$currentChar] = $right;
            
            // Update maximum length
            $maxLength = max($maxLength, $right - $left + 1);
        }

        return $maxLength;
    }
}