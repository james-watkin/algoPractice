// Kadanes Algorithm
// take in a non empty array on integers 
// return Maximum sum that can be obtained by summing all the integers in a non empty sub array

// Array  =>      [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 1, 3,-5, 4]
// Result =>      19
// Sub-Array =>   [1, 3, -2, 3, 4, 7, 2, -9, 6, 1]

// Naive Approach
// double for loop. -> add up every integer together up to a certain point
// permuatations -> O(n^2 * N!)

// Left/Right pointer
// finalLeft = 3 
// left = 3 
// finalRight = 11 
// right = 11  
// totalAmount before a negative number
// array of totals -> get added once a reset happens

function Kadanes(array) {
    let runningSum = array[0];  
    let maxNum = -Infinity;   
    for(let i = 1 ; i < array.length ; i++ ){
        let curEle = array[i]               
        let potSum = runningSum + curEle   

        if( potSum <= 0 ){ 
            maxNum = Math.max(runningSum, maxNum)
            runningSum = 0;

        }else {
            runningSum += curEle
            maxNum = Math.max(runningSum, maxNum)
        }


    }

    return maxNum

}

console.log(Kadanes([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 1, 3,-5, 4]))
console.log(Kadanes([-2,-3,-4,-5,-6,-7,-8,-9,-10]))

