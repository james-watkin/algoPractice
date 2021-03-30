class MaxHeap {
    constructor(){
        this.array = [ null ]
    }

    getParent(idx){
        return Math.floor(idx / 2)
    }

    getLeftChild(idx){
        return idx * 2
    }

    getRightChild(idx){
        return idx * 2 + 1
    }

    siftUp(idx){
        if( idx === 1 ) return;

        let current = this.array[idx]
        let parentIdx = this.getParent(idx)
        let parent = this.array[parentIdx]

        if( current > parent ) {
            [this.array[parentIdx], this.array[idx]] = [this.array[idx], this.array[parentIdx]]

            this.siftUp(parentIdx)
        }

    }

    insert(val){
        this.array.push(val)
        this.siftUp(this.array.length-1);
    }

    siftDown(idx){
        let leftChildIdx = this.getLeftChild(idx)
        let rightChildIdx = this.getRightChild(idx)

        let leftChildVal = this.array[leftChildIdx]
        let rightChildVal = this.array[rightChildIdx]

        if( !leftChildVal ) leftChildVal = -Infinity
        if( !rightChildVal ) rightChildVal = -Infinity

        if( this.array[idx] > leftChildVal && this.array[idx] > rightChildVal) return;

        let swapIdx = 0;
        if( leftChildVal > rightChildVal){
            swapIdx = leftChildIdx
        }else{
            swapIdx = rightChildIdx
        }

        [this.array[idx],this.array[swapIdx]] = [this.array[swapIdx], this.array[idx]]

        this.siftDown(swapIdx)
    }

    deleteMax(){
        if( this.array.length === 2) return this.array.pop()
        if( this.array.length === 1) return null;

        let max = this.array[1]
        this.array[1] = this.array.pop();
        
        this.siftDown(1)
        return max;

    }
}

module.exports = {
    MaxHeap
};