/*

Given an input string, reverse the string word by word.

For example,
Given s = "the sky is blue",
return "blue is sky the".


*/

/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
	var trimmed = str.trim();
	if (trimmed.length === 0) {
		return '';
	}
	var words = trimmed.split(/\s/).filter(function(a) {
		return a !== '';
	});
	return words.reverse().join(' ');
};
