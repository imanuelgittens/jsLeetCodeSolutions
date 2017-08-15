/*
Implement strStr().

Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
	if (haystack.indexOf(needle) > -1) {
		return haystack.indexOf(needle);
	} else {
		return -1;
	}
};
