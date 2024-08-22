/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

    var num = 0

    const romanValues = [1, 5, 10, 50, 100, 500, 1000]
    const romanSymbols = ["I", "V", "X", "L", "C", "D", "M"]

    const listRoman = s.split("")

    for(let i = 0; i < listRoman.length; i++){
        for(let j = 0; j < romanSymbols.length; j++){

            if(listRoman[i] == romanSymbols[j]){
                if(!listRoman[i + 1]){
                    num = num + romanValues[j]
                } 
                else{
                    for(let k = 0; k < romanSymbols.length; k++){
                
                        if(listRoman[i + 1] == romanSymbols[k]){
                            if(j < k){
                                num = num - romanValues[j]
                            } else{
                                num = num + romanValues[j]
                            }
                        }
                    }
                }
            }
        }
    }
    return num
};
