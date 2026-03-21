/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let insertPos = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            // Check prevents self-assignment to minimize operations
            if (i !== insertPos) {
                nums[insertPos] = nums[i];
                nums[i] = 0;
            }
            insertPos++;
        }
    }
};