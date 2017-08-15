/*
Count the number of segments in a string, where a segment is defined to be a contiguous sequence of non-space characters.

Please note that the string does not contain any non-printable characters.

Example:

Input: "Hello, my name is John"
Output: 5
*/

/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
	var sArr = s.trim().split(/\s/);
	var result = 0;
	var i;
	for (i = 0; i < sArr.length; i++) {
		if (sArr[i].length > 0) {
			result++;
		}
	}
	return result;
};
