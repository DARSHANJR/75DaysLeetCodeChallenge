from typing import List

class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        # Step 1: Calculate the sum of the first 'k' elements (our initial window)
        current_sum = sum(nums[:k])
        max_sum = current_sum
        
        # Step 2: Slide the window through the rest of the array
        for i in range(k, len(nums)):
            # Add the element coming into the window, remove the element going out
            current_sum += nums[i] - nums[i - k]
            
            # Update max_sum if we found a new maximum
            if current_sum > max_sum:
                max_sum = current_sum
                
        # Step 3: Return the maximum average
        return max_sum / k