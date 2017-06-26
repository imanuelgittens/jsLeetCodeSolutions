/*

You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.

*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
    var a = 1; //number of ways to reach current step
    var b = 1; //number of ways to reach the next step
    while(n--){
        a = (b += a) - a; 
    }
    
    return a;
    
};