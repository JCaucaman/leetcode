/**
 * @param {number} num
 * @return {number}
 */

var findComplement = function(num) {

    var rest = -1
    var condition = true
    var mod = num
    var modComplement = 0
    var numberBinary = ""
    var numberBinaryComplemet = ""

    if(num == 1){
        return 0
    }

    while(condition){
        rest = mod%2
        mod = (mod - rest)/2

        numberBinary = rest.toString() + numberBinary

        if(mod == 0 || mod == 1){
            numberBinary = mod.toString() + numberBinary
            condition = !condition
        }
    }

    for(let i = 0; i < numberBinary.length; i++){
        if(numberBinary[i] == "0"){
            numberBinaryComplemet = "1" + numberBinaryComplemet
        }else{
            numberBinaryComplemet = "0" + numberBinaryComplemet
        }
    }

    for(let i = numberBinaryComplemet.length - 1; i > -1 ; i--){
        modComplement += parseInt(numberBinaryComplemet[i]) * (2**i)
    }

    console.log(modComplement)
    return modComplement
};

findComplement(5);
findComplement(10);
findComplement(7);
findComplement(1);