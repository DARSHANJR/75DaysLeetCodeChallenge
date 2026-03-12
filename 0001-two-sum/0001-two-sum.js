/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    // Map to store the number and its corresponding index
    const numMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const complement = target - currentNum;

        // Check if the complement exists in our map
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }

        // Store the current number and its index for future reference
        numMap.set(currentNum, i);
    }

    // Return empty array if no solution is found (though the prompt guarantees one)
    return [];
}