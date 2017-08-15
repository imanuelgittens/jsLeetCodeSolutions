/*

Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this in place with constant memory.

For example,
Given input array nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the new length.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var i;
    var j = 0; //keeps track of non duplicates
    var k;

    if (nums.length === 0) {
        return false;
    }

    var cur = nums[0];

    for (i = 1; i < nums.length; i++) {
        if (nums[i] !== cur) {
            j++;
            nums[j] = nums[i];
            cur = nums[i];
        }
    } //we put all non duplicates to the start of the Array

    //since j starts at 0, we add one to get the new length
    j++;

    var len = nums.length;

    for (k = j; k < len; k++) {
        nums.pop(); // remove all duplicated items from array
    }
    return nums.length;
};
