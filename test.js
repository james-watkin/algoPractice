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
let obj1 = { name: "Joe", email: "joe@test.com", sales: 53 };
let obj2 = { name: "hi", email: "hi@test.com", sales: 43 };
let obj3 = { name: "Hello", email: "hello@hello.com" };

let arr = [obj1, obj2, obj3];

let emails = [];

for (let obj of arr) {
  if (obj.email) {
    emails.push(obj.email);
  }
}

console.log(arr);
console.log(arr.map((data) => (data.email ? data.email : "")));
console.log(emails);
