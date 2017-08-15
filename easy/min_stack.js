/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
*/

/**
 * initialize your data structure here.
 */
var MinStack = function() {
	this.arr = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
	this.arr.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
	this.arr.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
	var top = this.arr[this.arr.length - 1];
	return top;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
	if (this.arr.length > 0) {
		var min = this.arr[0];
		var i;
		for (i = 1; i < this.arr.length; i++) {
			if (this.arr[i] < min) {
				min = this.arr[i];
			}
		}
		return min;
	} else {
		return null;
	}
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
