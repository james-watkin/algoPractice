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

// function Kadanes(array) {
//     let runningSum = array[0];  
//     let maxNum = -Infinity;   
//     for(let i = 1 ; i < array.length ; i++ ){
//         let curEle = array[i]               
//         let potSum = runningSum + curEle   

//         if( potSum <= 0 ){ 
//             maxNum = Math.max(runningSum, maxNum)
//             runningSum = 0;

//         }else {
//             runningSum += curEle
//             maxNum = Math.max(runningSum, maxNum)
//         }


//     }

//     return maxNum

// }

// console.log(Kadanes([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 1, 3,-5, 4]))
// console.log(Kadanes([-2,-3,-4,-5,-6,-7,-8,-9,-10]))


function longestPath(matrix){
    let startArray = new Array(matrix.length).fill().map( u => new Array(matrix[0].length).fill(null) )
    for(let i = 0; i < matrix.length; i++){
        let currentRow = startArray[i]
        for( let j = 0; j < currentRow.length; j++){
            let currentInMatrix = matrix[i][j]

            if( currentInMatrix === 0 ) startArray[i][j] = 1;
        }
    }

    for( let i = 0; i < startArray.length; i++){
        let currentRow = startArray[i]
        for(let j = 0; j < startArray[0].length; j++){
            let currentEle = currentRow[j]
            if(currentEle === null) continue;
            //Search Left
            let left = j - 1
            while(left >= 0){
                let currentEle = currentRow[left]
                if(currentEle === null){
                    break
                }else{

                    currentRow[left] += 1
                    left--
                }
            }
            //Search Right
            let right = j + 1
            while(right < currentRow.length){
                let currentEle = currentRow[right]
                if(currentEle === null){
                    break;
                }else{

                    currentRow[right] += 1
                    right++
                }
            }
            //Search Up
            
            if( i > 0){
                
                let above = startArray[i-1][j]
                if( above !== null){ 
                    currentRow[j] += above 
                }
                else{
                    let maxInRange = Math.max(...currentRow.slice(left + 1 , right - 1))
                    currentRow[j] = Math.max(currentRow[j], maxInRange)
                }
            }

        }
        
    }
    let solution = Math.max(...startArray[startArray.length - 1])
    console.log(startArray)
    if(solution === 1) return [-1,-1]
    return solution;
}

// [0,0,1,1,0]
// [0,0,1,1,0]
// [1,0,0,1,1]
// [1,1,0,1,1]
// [0,0,0,1,1]

console.log(longestPath([ [0,0,'#','#',0], [0,0,'#','#',0], ['#',0,0,'#',0], ['#','#',0,'#',0], [0,0,0,"#","#"]])) // -> 4
console.log(longestPath([ [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0]]))

