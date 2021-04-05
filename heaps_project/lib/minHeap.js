class MinHeap {
    constructor(array) {
      this.heap = this.buildHeap(array);
    }
  
    buildHeap(array) {
          this.heap = []
          
          for(let i = array.length - 1; i > -1; i --){
              this.insert( array[i] )
          }
          
          return this.heap
    }
      
      getLeftIdx(idx){
          return idx * 2 + 1
      }
      
      getRightIdx(idx){
          return idx * 2 + 2
      }
      
      getParent(idx){
          return Math.floor( (idx - 1) / 2 )
      }
  
    siftDown(idx) {
          let leftIdx = this.getLeftIdx(idx)
          let rightIdx = this.getRightIdx(idx)
          
          let leftVal = this.heap[leftIdx]
          let rightVal = this.heap[rightIdx]
          
          if ( !leftVal ) leftVal = Infinity;
          if ( !rightVal ) rightVal = Infinity;
          
          let val = this.heap[idx]
          if( val < leftVal && val < rightVal ) return;
          
          let swapIdx = 0;
          if( leftVal < rightVal){
              swapIdx = leftIdx
          }else{
              swapIdx = rightIdx
          }
          
          [this.heap[idx], this.heap[swapIdx]] = [this.heap[swapIdx], this.heap[idx]]
          
          this.siftDown(swapIdx)
  
    }
  
    siftUp(idx) {
      if( idx === 0 ) return;
          
          let current = this.heap[idx]
          let parentIdx = this.getParent(idx)
          let parentVal = this.heap[parentIdx]
          
          if(current < parentVal){
              [this.heap[idx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[idx]]
              
              this.siftUp(parentIdx)
          }
    }
  
    peek() {
      return this.heap[0]
    }
  
    remove() {
          if(this.heap.length < 1 ) return this.heap;
          
          if( this.heap.length === 1){
              return this.heap.shift(); 
          }
          
          
          let tempVal = this.heap[0]
          this.heap[0] = this.heap.pop()
          this.siftDown(0)
          return tempVal
    }
  
    insert(value) {
      this.heap.push(value)
          this.siftUp(this.heap.length - 1)
    }
  }
  

let array = [-7, 2, 3, 8, -10, 4, -6, -10, -2, -7, 10, 5, 2, 9, -9, -5, 3, 8]
let minHeap = new MinHeap(array)

console.log(minHeap.heap)
minHeap.remove()
console.log(minHeap.heap)
minHeap.peek()
minHeap.insert(-8)
console.log(minHeap.heap)