/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // Step 1: Sort the array in ascending order
    nums.sort((a, b) => a - b);
    const result = [];
    
    // Step 2: Iterate through the array (leaving room for left and right pointers)
    for (let i = 0; i < nums.length - 2; i++) {
        // Optimization: If the smallest number is greater than 0, sum can't be 0
        if (nums[i] > 0) break;
        
        // Skip duplicate anchor values to avoid duplicate triplets
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        let left = i + 1;
        let right = nums.length - 1;
        
        // Step 3: Two-pointer search
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            
            if (sum === 0) {
                // Triplet found
                result.push([nums[i], nums[left], nums[right]]);
                
                // Skip duplicate values for the left pointer
                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }
                // Skip duplicate values for the right pointer
                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }
                
                // Move both pointers after processing a valid triplet
                left++;
                right--;
                
            } else if (sum < 0) {
                // Need a larger sum, move left pointer right
                left++;
            } else {
                // Need a smaller sum, move right pointer left
                right--;
            }
        }
    }
    
    return result;
};