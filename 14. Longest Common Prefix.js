/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    var prefix = strs[0]
    var str = ""
    var count = 0

    for(let i = 1; i < strs.length; i++){
        if(prefix == ""){
            break
        }
        for(let j = 0; j < prefix.length; j++){
            for(let k = 0; k < strs[i].length; k++){
                if(prefix[j] == strs[i][k] && j == k && j == count){
                    str = str + prefix[j] 
                    count += 1
                }
            }
        }
        count = 0
        prefix = str
        str = ""
    }
    console.log(prefix)
    return prefix
};

longestCommonPrefix(["cir","car"])
longestCommonPrefix(["flower","flow","flight"])