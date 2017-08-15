/*
Given an array and a value, remove all instances of that value in place and return the new length.

Do not allocate extra space for another array, you must do this in place with constant memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

Example:
Given input array nums = [3,2,2,3], val = 3

Your function should return length = 2, with the first two elements of nums being 2.
*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
	var i, j, k;
	var cur;
	var len = nums.length;

	if (len === 1 && nums[0] === val) {
		return 0;
	}

	for (i = 0; i < len; i++) {
		//move all values found to the end of the array
		if (nums[i] === val) {
			for (j = 0; j < len - 1; j++) {
				if (nums[j] === val) {
					cur = nums[j];
					nums[j] = nums[j + 1];
					nums[j + 1] = cur;
				}
			}
		}
	}

	for (k = 0; k <= nums.length; ) {
		// remove all values found from the end of the array
		if (nums[k] === val) {
			nums.pop();
		} else {
			k++;
		}
	}

	return nums.length;
};
