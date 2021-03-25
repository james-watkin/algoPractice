
// Praneeth coding challenge

function barrelAlpha(letArr,numArr){

    let letHash = {'A':1, 'B':2,'C':3, 'D':4,'E':5, 'F':6,'G':7, 'H':8,'I':9, 'J':10, 'K':11, 'L':12,
    'M':13, 'N':14, 'O':15, 'P':16,'Q':17, 'R':18,'S':19, 'T':20,'U':21, 'V':22,'W':23, 'X':24,
    'Y':25, 'Z':26}

    let alphaString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'


    for(let i = 0; i < numArr.length; i++){
        let currentNum = numArr[i]
        if(currentNum < 1 || currentNum > letArr.length) continue;

        for(let j = currentNum - 1; j < letArr.length; j++){

            let char = letArr[j]
            let newIdx = letHash[char] % 26

            letArr[j] = alphaString[newIdx]

        }


    }

    return letArr
}


function alphabetBarrel(A, B){
    B = B.sort((a,b) => a-b)
    // console.log(B)
    let advancementCount = {} //key:value pair for this hashtable will be position:numberOfAdvancements
    
    // populates advancementCount by iterating through array B
    for(let i = 0; i < B.length; i++){
        let currPosition = B[i];
        if(i === 0){
            advancementCount[currPosition] = 1;
            continue;
        }
        if(!advancementCount[currPosition]){
            let prevPosition = B[i-1];
            advancementCount[currPosition] = advancementCount[prevPosition] + 1
        } else {
            advancementCount[currPosition] += 1;
        }
    }

    console.log(advancementCount)
    // 
    for(let i = 0; i < A.length; i++){
        let numAdvancements = advancementCount[i + 1] % 26;
        if(!numAdvancements) continue;
        let letter = A[i];
        let letterCode = letter.charCodeAt() + numAdvancements;
        let newLetter = letterCode <= 90 ? String.fromCharCode(letterCode) : String.fromCharCode(64 + (letterCode % 90))
        A[i] = newLetter;
        // A[i] = getAdvancedLetter(A[i], numAdvancements);
    }
    
    // console.log(advancementCount);
    // console.log(A);
    // console.log(B)
    return A;
}






let arrA = ['A','C','Z']
let arrB = [5,5,5,3,2,1,3,2,1,3,2,1,3,2,2,1,3,2,2,2,2,2,2,3,1,3,2,2,1,3,2,3,3,3,3,3,3,2,1,2,2,3,2,3,1,2,2,2,2]


// console.log(barrelAlpha(arrA, arrB))
console.log(alphabetBarrel(arrA,arrB))



