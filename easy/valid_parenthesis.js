/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	var stack = [];
	var pairs = { '(': ')', '{': '}', '[': ']' };
	var cur, i, stackTop;

	for (i = 0; i < s.length; i++) {
		cur = s.charAt(i);
		if (pairs.hasOwnProperty(cur)) {
			stack.push(cur);
		} else if (stack.length === 0) {
			return false;
		} else {
			stackTop = stack.pop();
			if (pairs[stackTop] !== cur) {
				return false;
			}
		}
	}

	if (stack.length === 0) {
		return true;
	} else {
		return false;
	}
};
