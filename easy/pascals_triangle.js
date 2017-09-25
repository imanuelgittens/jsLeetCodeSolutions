/*

Given numRows, generate the first numRows of Pascal's triangle.

For example, given numRows = 5,
Return

[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]


*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
	if (numRows <= 0) {
		return [];
	} else {
		var a = [[1]];
		var triangle = pascalRecursive(numRows, a);
		return triangle;
	}
};

var pascalRecursive = function(n, a) {
	if (n < 2) {
		return a;
	}

	var previousRow = a[a.length - 1];
	var currentRow = [1];

	for (var i = 1; i < previousRow.length; i++) {
		currentRow[i] = previousRow[i] + previousRow[i - 1];
	}

	currentRow.push(1);
	a.push(currentRow);

	return pascalRecursive(n - 1, a);
};
