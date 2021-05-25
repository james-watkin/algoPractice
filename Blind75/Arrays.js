// Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

function twoSum(array, target){
    let hash = {}

    for( let i = 0; i < array.length; i++){
        let ele = array[i]

        if( hash[ele] !== undefined) {
            return [hash[ele], i]
        }else{
            let saved = Math.abs(target - ele) 
            hash[saved] = i 
        }
    }
}

console.log('--------- Two Sum ----------')
console.log(twoSum([2,7,11,15], 9)) // -> [0,1]
console.log(twoSum([3,2,4], 6)) // -> [1,2]
console.log(twoSum([3,3], 6)) // -> [0,1]
console.log('-----------------------------')