function findClosestValueInBst(tree, target) {
    // Write your code here.
  }
  
  // This is the class of the input tree. Do not edit.
class BST {
constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
}

// Do it with adjacent elements.
  
function minMoves(arr) {
    // Write your code here
    let leftIdx = 0; // 0
    let rightIdx = arr.length - 1; // 8
    let total = 0;
    
    while(leftIdx !== rightIdx){ // 0 !== 8
        //  [ 1,0,1,0,0,0,0,1 ]
        // 1 === 1, 1 === 0
        if(arr[leftIdx] === 1 && arr[rightIdx] === 0){
            [arr[leftIdx],arr[rightIdx]] = [arr[rightIdx], arr[leftIdx]]
            console.log(arr)
            total += 1
            leftIdx += 1
            rightIdx -= 1
        } else if(arr[rightIdx] === 1){
            rightIdx -= 1
        } else {
            leftIdx += 1
        }
        
    }
    return total
    
}