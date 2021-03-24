function maxValue(node, visited = new Set()) {

    let queue = [node]

    let largest = -Infinity
    while(queue.length){
        let node = queue.shift()
        if(visited.has(node)) continue;
        visited.add(node)

        if(node.val > largest) largest = node.val;
        queue.push(...node.neighbors)

    }

    return largest
}

module.exports = {
    maxValue
};


