// memoization
// js obj, keys will be arg to fn, value will be the return value

const fib = (n, memo = {}) => {
    if(n in memo) return memo[n];
    if(n <= 2) return 1;

    memo[n] = fib(n-1, memo) + fib(n-2, memo)
    return memo[n];  
};

// O(n) Time
// O(n) Space

// console.log(fib(6));
// console.log(fib(7));
// console.log(fib(8));

// console.log(fib(10))


const gridTraveler = (l,w, memo = {}) => {
    if([l,w] in memo) return memo[[l,w]];
    if(l === 1 && w === 1) return 1;
    if(l === 0 || w === 0) return 0;

    memo[[l,w]] = gridTraveler(l - 1, w, memo) + gridTraveler(l, w - 1, memo)
    return memo[[l,w]]
}

// console.log(gridTraveler(1,1))
// console.log(gridTraveler(2,3))
// console.log(gridTraveler(3,2))
// console.log(gridTraveler(3,3))
// console.log(gridTraveler(18,18))


// 7, [5,3,4,7] => true
const canSun = (targetSum, number) => {

}