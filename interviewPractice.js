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

// console.log(longestPath( [  
//     ['#', 1,  1,   1 ,  1],
//     ['#','#', '#' '#',  1],
//     [ 1,  1,  1, '#',  1],
//     [ 1, '#',  1,  1,   1],
//     [ 1,  1,  '#', '#','#']
// ]))

// function longestPath(matrix){
//     let startArray = new Array(matrix.length).fill().map( u => new Array(matrix[0].length).fill(null) )
//     for(let i = 0; i < matrix.length; i++){
//         let currentRow = startArray[i]
//         for( let j = 0; j < currentRow.length; j++){
//             let currentInMatrix = matrix[i][j]
//             if( currentInMatrix === 0 ) startArray[i][j] = 1

//         }
//     }
//     // console.log(startArray)

//     for( let i = 0; i < startArray.length; i++){
//         let currentRow = startArray[i]
//         for(let j = 0; j < startArray[0].length; j++){
//             let currentEle = currentRow[j]
//             if(currentEle === null) continue;
//             //Search Left
//             let left = j - 1
//             while(left >= 0){
//                 let currentEle = currentRow[left]
//                 if(currentEle === null){
//                     break
//                 }else{

//                     currentRow[left] += 1
//                     left--
//                 }
//             }
//             //Search Right
//             let right = j + 1
//             while(right < currentRow.length){
//                 let currentEle = currentRow[right]
//                 if(currentEle === null){
//                     break;
//                 }else{

//                     currentRow[right] += 1
//                     right++
//                 }
//             }
//             //Search Up
//             if( i > 0){
                
//                 let above = startArray[i-1][j]
//                 if( above !== null){ 
//                     // console.log(startArray)
//                     currentRow[j] += Math.max(...startArray[i-1]) 
//                 }
//                 else{
//                     let maxInRange = Math.max(...currentRow.slice(left + 1 , right - 1))
//                     currentRow[j] = Math.max(currentRow[j], maxInRange)
//                 }
//             }
            
//             // console.log(startArray)
//         }
        
//     }
//     let solution = Math.max(...startArray[startArray.length - 1])
//     // console.log(startArray)
//     if(solution === 1) return [-1,-1]
//     return solution;
// }

// function longestPath(matrix) {
//     let max = -1;
  
//     function dfs(x, y, length = 0, visiteds={}) {
    
//         // visiteds key format = `${x}, ${y}`
//         if (visiteds[`${x}, ${y}`]) return;
        
//         let currVisits = {}
//         for( prop in visiteds){

//         }
        
//         let a = x + 1;
//         let b = x - 1;
//         let c = y + 1;
//         let d = y - 1;
        
//         if ( (visiteds[`${a}, ${y}`] || a < 0 || a > matrix.length - 1) && 
//              visiteds[`${b}, ${y}`] ||
//              visiteds[`${x}, ${c}`] ||
//              visiteds[`${x}, ${d}`]
//             ){
//             if (y === matrix[0].length - 1 && length > max) {
//                 max = length
//             }
//             return
//             }
//         else if ((!visiteds[`${a}, ${y}`] && a >= 0 && a < matrix.length))
//             dfs(a, y, dirs, length + 1, visiteds)
//             visiteds = currVisits;
        
//             b, y,
//             x, c
//             x, d
//             return;    
//     }
  
//     //iterating through first row of matrix
//     for (let i = 0; i < matrix[0].length; i++) { 
//       dfs(0, i);
//     }
  
//   return max;
// }


function longestPath(matrix){

    let max = -1
    
    for( let i = 0; i < matrix[0].length; i++){
        if( matrix[0][i] === 0){
            DFS(0, i, 1)
        }
    }

    function DFS(x, y, length, visited = new Set()){

        if( visited.has(`${x} : ${y}`) ) return;
        let nextVisited = new Set(visited)
        nextVisited.add(`${x} : ${y}`)

        let bottom = matrix.length - 1
        if( x === bottom){
            max = Math.max(max, length)
        }

        let left = y - 1
        let right = y + 1
        let up = x - 1
        let down = x + 1
        
        if( matrix[x]    && matrix[x][left]  === 0 ) DFS(x, left, length + 1, nextVisited);
        if( matrix[x]    && matrix[x][right] === 0 ) DFS(x, right, length + 1, nextVisited);
        if( matrix[up]   && matrix[up][y]    === 0 ) DFS(up, y, length + 1, nextVisited);
        if( matrix[down] && matrix[down][y]  === 0 ) DFS(down, y, length + 1, nextVisited);

    }


    return max

}

// [0,0,#,#,0]
// [0,0,#,#,0]
// [#,0,0,#,#]
// [#,#,0,#,#]
// [0,0,0,#,#]

// [ 1, null, null, 2, 2 ],
// [ 6,   6,    6, 7, 7 ],
// [ 8,  8, null, 9, 9 ],
// [ 13, 13, 13, 14, 14 ],
// [ 18, 18, 18, 19, 19 ]

let example = [
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], 
    [1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1], 
    [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0], 
    [0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1], 
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1], 
    [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0], 
    [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0], 
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0], 
    [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0], 
    [1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1], 
    [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], 
    [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0], 
    [0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0], 
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0], 
    [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0], 
    [0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0], 
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0], 
    [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], 
    [0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1], 
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], 
    [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1], 
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0], 
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0],
    [1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0], 
    [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]



// function longestPath(grid) {
// 	// edge cases
//   // return 0 if top row is all #'s or bottom row is all #'s
//   const pathLengths = [];
  
//   for (let i = 0; i < grid[0].length; i++) { // O(cols)
//   	if (grid[0][i] === 0) {
//         const visited = new Set();
//     	countPath(0, i , grid, pathLengths, visited, 1);
//     }
//   }
//   console.log(pathLengths)
//   return Math.max(...pathLengths);
// }


// function countPath(row, col, grid, pathLengths, visited, count) {
// 	// stop when no more directions left
//   if (visited.has(`${row}.${col}`) ||
//   	row - 1 < 0 || grid[row-1][col] === '#' || // top 
//   	col - 1 < 0 || grid[row][col-1] === '#' || // left
//     row + 1 >= grid.length || grid[row+1][col] === '#' || // bottom
//     col + 1 >= grid[0].length || grid[row][col+1] !== '#') { // right

//     pathLengths.push(count);
//     return;
//   }
  
//   visited.add(`${row}.${col}`);

//   if (row - 1 >= 0 && grid[row-1][col] !== '#') countPath(row - 1, col, grid, pathLengths,visited, count + 1); // top
//   if (col - 1 >= 0 && grid[row][col-1] !== '#') countPath(row, col - 1, grid, pathLengths,visited, count + 1); // left
//   if (row + 1 < grid.length && grid[row+1][col] !== '#') countPath(row + 1, col, grid, pathLengths,visited, count + 1); // bottom
//   if (col + 1 < grid[0].length && grid[row][col+1] !== '#') countPath(row, col + 1, grid, pathLengths,visited, count + 1); // right
// }



console.log(longestPath([ 
    [ 0,  0,'#','#',0], 
    [ 0,  0,'#','#',0], 
    ['#', 0, 0,'#',0], 
    ['#','#',0,'#',0], 
    [0,   0, 0,"#","#"]
])) // -> 4
console.log(longestPath([ 
    [0,'#', 0, '#',0], 
    [0, 0,  0,  0, 0], 
    [0, 0, '#', 0, 0], 
    [0, 0,  0,  0, 0], 
    [0, 0  ,0,  0, 0]
 ]))

console.log(longestPath( [  
    ['#', 0,  0,   0 ,  0],
    ['#', 0,  0,   0,   0],
    ['#','#', 0,  '#',  0],
    ['#','#', 0,  '#',  0],
    [0,   0,  0,  '#','#']
]))

// console.log(longestPath(example))

console.log(longestPath( [  
    ['#', 0,   0,  0 ,  0],
    ['#','#', '#','#',  0],
    [ 0,  0,   0, '#',  0],
    [ 0, '#',  0,  0,   0],
    [ 0,  0,  '#','#', '#']
]))




// function budgetCuts(salaries, newBudget){
//     let lower = 0;
//     let upper = Math.max(...salaries);

//     let mid = Math.floor(upper/2);

//     let sum = 0;
//     while(true){
//         sum = 0;
//         for( let i = 0; i < salaries.length; i++){
//             let currentSalary = salaries[i]
//             if( currentSalary >= mid){
//                 sum += mid
//             }else{
//                 sum += currentSalary
//             }
//         }
        // console.log(`${i}: ------`)
        // console.log(`Sum:${sum}`)

        // console.log(`Lower:${lower}`)
        // console.log(`Mid:${mid}`)
        // console.log(`Upper:${upper}`)

//         if( sum > newBudget){
//             upper = mid
//             mid = Math.floor((upper +lower)/ 2)
//         }else if ( sum < newBudget){
//             lower = mid
//             mid = Math.floor((upper + lower) / 2)
//         }else{
//             break;
//         }

//         i++
//     }

//     return mid;
// }
// console.log('*******************************************************')
// console.log(`Answer: ${budgetCuts([100, 300, 200, 400], 800)}`)
// console.log('*******************************************************')
// console.log(`Answer: ${budgetCuts([2,100,50,120,1000], 190)}`)
// console.log(budgetCuts([100, 300, 200, 400,700,1000], 800))
// budgetCuts([100, 300, 200, 400], 800)
// Output: 250
// Explanation: k should be 250, so the total salary after the reduction 100 + 250 + 200 + 250 is exactly equal to 800.

// function fib(n){
//     if (n === 0) return 0;
//     if (n === 1) return 1;
//     return fib(n-1) + fib(n-2)
// }

function fib(n, memo={'1':1, '2': 1}){
    if( n in memo) return memo[n]
    memo[n] = fib(n - 1, memo) + fib( n - 2, memo)
    console.log(memo)
    return memo[n]
}

// console.log(fib(15))

// console.log(fib(30))

// console.log(fib(45))

// console.log(fib(100))