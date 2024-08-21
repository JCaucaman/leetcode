/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    const X = x.toString()
    const xInvert = X.split("").reverse().join("")

    if(X == xInvert){
        return true
    }
    else{
        return false
    }
};
