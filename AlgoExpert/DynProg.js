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
const canSum = (targetSum, numbers, memo = {} ) => {
    if( targetSum in memo) return memo[targetSum];
    if( targetSum === 0 ) return true;
    if( targetSum < 0) return false;

    for( let num of numbers )  {
        const remainder = targetSum - num;
        if(canSum(remainder, numbers, memo)){
            memo[targetSum] = true
            return true;
        }
    }
    memo[targetSum] = false;
    return false;
}

// console.log(canSum(7,[2, 3]))
// console.log(canSum(7,[5,3,4,7]))
// console.log(canSum(7,[2, 4]))
// console.log(canSum(8,[2, 3, 5 ]))
// console.log(canSum(13000,[7,14]))

const howSum = (targetSum, numbers) => {

}

// console.log(howSum(7,[2, 3]))
// console.log(howSum(7,[5,3,4,7]))
// console.log(howSum(7,[2, 4]))
// console.log(howSum(8,[2, 3, 5 ]))
// console.log(howSum(300,[7,14]))
