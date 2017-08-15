/*
Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.

Note:
The given integer is guaranteed to fit within the range of a 32-bit signed integer.
You could assume no leading zero bit in the integer’s binary representation.

Example 1:
Input: 5
Output: 2
Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.

Example 2:
Input: 1
Output: 0

Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.

*/

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
	var binaryNum = toBinary(num);
	var reversedNum = '';
	var i;
	for (i = 0; i < binaryNum.length; i++) {
		if (binaryNum[i] === '1') {
			reversedNum += '0';
		} else {
			reversedNum += '1';
		}
	}
	return toDecimal(reversedNum);
};

function toDecimal(n) {
	var i;
	var result = 0;
	for (i = 0; i < n.length; i++) {
		if (n[i] === '1') {
			result += Math.pow(2, i);
		}
	}
	return result;
}

function toBinary(n) {
	var binary = '';
	var rem;
	while (n > 0) {
		rem = n % 2;
		binary += rem;
		n = parseInt(n / 2);
	}
	return binary;
}
