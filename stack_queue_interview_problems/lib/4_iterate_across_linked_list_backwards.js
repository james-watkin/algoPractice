// ============================================================================
// Interview Problem: Constant Time Stack Max
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Iterate over a Singly Linked List of primitives backwards. When finished, 
// return a string representing the original linked list's values backwards 
// in the following format:
//
//                             'A -> B -> C -> D' 
//
// ------------
// Constraints:
// ------------
//
// (1) Your function must be iterative, not recursive.
// (2) Your function must consume O(n) space.
// (3) Employee either a Stack, Queue, or some combination of the two in your
//     solution. (Implement any data structures you need, as you need them.)
//
//
// -----------
// Let's code!
// -----------

function iterateAcrossLinkedListBackwards(linkedList) {
    // TODO: Implement the iterateAcrossLinkedListBackwards function here

    let result = []

    let currentNode = linkedList.head

    // console.log(linkedList)
    while(currentNode !== null){
        if(currentNode.value === null){
            result.unshift('null')
        }else if( currentNode.value === undefined){
            result.unshift('undefined')
        }else{
            result.unshift(currentNode.value)
        }
        
        currentNode = currentNode.next
    }

    return result.join(' -> ')

}

exports.iterateAcrossLinkedListBackwards = iterateAcrossLinkedListBackwards;
