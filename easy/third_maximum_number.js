/*
Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

Example 1:
Input: [3, 2, 1]

Output: 1

Explanation: The third maximum is 1.
Example 2:
Input: [1, 2]

Output: 2

Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
Example 3:
Input: [2, 2, 3, 1]

Output: 1

Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
	var result = [];
	nums.sort(function(a, b) {
		return b - a;
	});

	var i;
	for (i = 0; i < nums.length; i++) {
		if (result.length === 3) {
			break;
		}
		if (result.indexOf(nums[i]) === -1) {
			result.push(nums[i]);
		}
	}

	if (result.length < 3) {
		return result.reduce(function(a, b) {
			return Math.max(a, b);
		});
	} else {
		return result[2];
	}
};
