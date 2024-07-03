/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(numbers, target){

    let numberbefore

    for(let i = 0; i < numbers.length; i++){

        if(numberbefore == numbers[i]){
            continue
        }
        numberbefore = numbers[i]

        var max = numbers.length - 1
        var min = i+1
        var mid

        while(min <= max){

            // determinar el medio
            if( (max - min) % 2 == 0 ){
                mid = min + ((max - min) / 2)
            }
            else{
                mid = min + ((max - min - 1) / 2)
            }

            if(numbers[mid] + numbers[i] == target) {
                console.log('encontrado')
                return [i+1, mid+1]
            }
            else if(numbers[mid] + numbers[i] < target){
                console.log([i, mid],'menor')
                min = mid + 1
            }

            else if(numbers[mid] + numbers[i] > target){
                console.log([i, mid],'mayor')
                max = mid - 1
            }
            else{
                break
            }

        }
    }

} 

module.export = { twoSum }

// console.log(twoSum([0,-1],-1))
// console.log(twoSum([2,3,4],6))
// console.log(twoSum([0,0,1,7,7,8,9,34],0))
// console.log(twoSum([2,7,11,15],9))