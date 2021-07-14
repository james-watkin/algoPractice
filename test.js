// salaries = [100, 300, 200, 400];
// budget = 800;

// // output = 250

// function awardBudgetCuts(salaries, budget) {
//     salaries.sort((a,b) => a - b)

//     let length = salaries.length
//     for( let i = salaries.length - 1; i > 0; i--){
//         let currentNum = salaries[i]

//     }

// }

// console.log(awardBudgetCuts(salaries, budget));

function bracketMatch(text) {
  let hash = { "(": 0, ")": 0 }; //  ( : 1  ) : 0

  for (let i = 0; i < text.length; i++) {
    let currBracket = text[i];
    // “(())”

    if (hash["("] > 0 && currBracket === ")") {
      hash["("] -= 1;
    } else if (currBracket === "(") {
      hash["("] += 1;
    } else {
      hash[")"] += 1;
    }
  }

  return hash["("] + hash[")"];
}

console.log(bracketMatch("(()"));
console.log(bracketMatch("(())"));
console.log(bracketMatch("())("));
