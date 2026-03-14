class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        # If lengths differ, they cannot be anagrams
        if len(s) != len(t):
            return False
            
        # Array to store character counts (26 lowercase English letters)
        counts = [0] * 26
        
        # Increment for s, decrement for t
        for i in range(len(s)):
            counts[ord(s[i]) - ord('a')] += 1
            counts[ord(t[i]) - ord('a')] -= 1
            
        # If all counts are 0, it's an anagram
        for count in counts:
            if count != 0:
                return False
                
        return True