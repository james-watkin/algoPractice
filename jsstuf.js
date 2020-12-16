function score( roll ) {
    let score = 0;
    roll = roll.sort(function(a,b) { return a - b });
    
    for(let i = 0; i < 5; i++){
        if(roll[i] === roll[i + 1] && roll[i] === roll[i + 2]){
            if(roll[i] !== 1){
                score += roll[i] * 100;
            } else {
                score += 1000;
            }
            i += 2
        } else if(roll[i] === 1){
            score += 100
        } else if(roll[i] === 5){
            score += 50;
        }
    }
    return score;
}
