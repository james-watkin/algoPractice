function maxValue(node, visited=new Set()) {
    let largest = -Infinity
    let queue = [node]

    while( queue.length) {
        let node = queue.shift()

        if(visited.has(node)) continue;
        visited.add(node)

        if( node.val > largest) largest = node.val;

        queue = queue.concat(node.neighbors)
    }

    return largest
}

module.exports = {
    maxValue
};