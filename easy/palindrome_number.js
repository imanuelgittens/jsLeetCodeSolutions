/*

Determine whether an integer is a palindrome. Do this without extra space.

Some hints:
Could negative integers be palindromes? (ie, -1)

If you are thinking of converting the integer to string, note the restriction of using extra space.

You could also try reversing an integer. However, if you have solved the problem "Reverse Integer", you know that the reversed integer might overflow. How would you handle such case?

There is a more generic way of solving this problem.

*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  
    if(x < 0){
      return false;
    }
    
    var num = x;
    var reversedNum = 0;
    var remainder = 0;
    
    while(num !== 0){
      remainder = num % 10;
      num = (num - remainder) / 10;
      reversedNum *= 10;
      reversedNum += remainder;
    }
    
    if(x === reversedNum){
      return true;
    }
    
    return false;
};