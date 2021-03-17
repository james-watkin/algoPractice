// find the loop in a linked list that doesnt end in null

// 1 -> 2 -> 3 ->  4 
//      ^- 7 <- 6 <- 5

// uses math to find the solution

// Pointer 1 = D + P
// Pointer 2 = 2D + 2P
// To reach the same value
// Total Distance = 2D + P
// Rest of Loop = D


class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function findLoop(head) {
      
      let first = head.next
      let second = head.next.next
  
      while(first !== second){
          first = first.next
          second = second.next.next
      }
      first = head;
      
      while( first !== second){
          first = first.next;
          second = second.next;
      }
      
      return first
  
  }