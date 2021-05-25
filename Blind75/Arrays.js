// ! Two Sum

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

// console.log('--------- Two Sum ----------')
// console.log(twoSum([2,7,11,15], 9)) // -> [0,1]
// console.log(twoSum([3,2,4], 6)) // -> [1,2]
// console.log(twoSum([3,3], 6)) // -> [0,1]
// console.log('-----------------------------')

// ! Best Time to Buy and Sell Stock

// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

function maxProfit(array){
    let minPrice = array[0]

    let profit = 0;

    for( let i = 1; i < array.length; i++){
        let current = array[i]
        minPrice = Math.min(current,minPrice)
        if(current > minPrice){
            profit = Math.max(profit, current - minPrice)
        }
    }



    return profit
}

// console.log(maxProfit([7,1,5,3,6,4])) // -> 5
// console.log(maxProfit([7,6,4,3,1])) // -> 0


// ! Duplicate Numbers

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.


function containsDuplicate(array){

    let hash = {}

    for( let i = 0; i < array.length; i++){
        let ele = array[i]
        if( hash[ele] ) return true;
        hash[ele] = true;
    }

    return false;
}


// console.log(containsDuplicate([1,2,3,1])) // True
// console.log(containsDuplicate([1,2,3,4])) // False
// console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])) // True
