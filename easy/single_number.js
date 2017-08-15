/*
Given an array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
	var i;
	nums.sort(function(a, b) {
		return a - b;
	});
	for (i = 0; i < nums.length; ) {
		if (nums[i] === nums[i + 1]) {
			i = i + 2;
		} else {
			return nums[i];
		}
	}
};
