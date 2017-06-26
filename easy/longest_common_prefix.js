/*

Write a function to find the longest common prefix string amongst an array of strings.

*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    if(strs.length === 0){ //check for empty input
      return '';
    }
    
    var i;
    var currIndex = 0;
    var result = '';
    strs.sort(function(a,b){
      return a.length > b.length;
    });
    
    while(currIndex < strs[0].length){
      var characterArr = [];
      
      for(i = 0; i < strs.length; i++){
        var character = strs[i][currIndex];
        characterArr.push(character);
      }
      
      var testPrefixes = reduceFunc(characterArr); //if array reduces correctly then the prefix is the same for all strings at the current index
      if(testPrefixes){
        result += testPrefixes;
      }else{
          break;
      }
      currIndex++;
    }
    
    return result;
};

function reduceFunc(arr){
  var result = arr.reduce(function(a,b){
    return a === b ? a : false;
  });
  return result;
}