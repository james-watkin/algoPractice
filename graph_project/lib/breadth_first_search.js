function breadthFirstSearch(startingNode, targetVal, visited = new Set()) {
    let queue = [startingNode]

    while(queue.length){
        let node = queue.shift();
        
        if(node.val === targetVal){
            return node;
        }

        queue.push(...node.neighbors)

        // if(visited.has(node.val)) return null;
    }

    return null;
}

module.exports = {
    breadthFirstSearch
};