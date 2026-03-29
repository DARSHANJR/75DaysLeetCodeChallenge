/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // If the string has an odd number of characters, it can't be valid
    if (s.length % 2 !== 0) return false;

    const stack = [];
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        // If it's a closing bracket
        if (bracketMap[char]) {
            // Pop the top element. If stack is empty, use a dummy value '#'
            let topElement = stack.length === 0 ? '#' : stack.pop();

            // If the mapped opening bracket doesn't match the popped element, it's invalid
            if (topElement !== bracketMap[char]) {
                return false;
            }
        } else {
            // If it's an opening bracket, push to the stack
            stack.push(char);
        }
    }

    // If the stack is empty, all brackets were matched correctly
    return stack.length === 0;
};