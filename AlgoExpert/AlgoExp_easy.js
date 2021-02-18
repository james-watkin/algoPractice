function compareStrings(s1, s2) {
    let s2Edited = editStrings(s1)
    let s1Edited = editStrings(s2)
    
    if(s1Edited === s2Edited) return 1;
    else return 0;
}

function editStrings( string ){
    let finalString = ""

    for(let i = 0 ; i < string.length; i++){
        let currentLetter = string[i]
        
        if( currentLetter === "#"){
            finalString = finalString.slice(0, -1)
        } else {
            finalString += currentLetter
        }
    }

    return finalString
}

function compareStrings(s1, s2) {
    let s2Edited = editStrings(s1)
    let s1Edited = editStrings(s2)

    
    if(s1Edited === s2Edited) return 1;
    else return 0;
}

function editStrings( string ){
    let finalString = ""

    for(let i = 0 ; i < string.length; i++){
        let currentLetter = string[i]
        
        if(currentLetter === "#"){
            if(finalString.length > 0){
                finalString = finalString.slice(0,-1)
            }
        }else{
            finalString += currentLetter
        }
    }

    return finalString
}