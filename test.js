let obj1 = {name: "Joe", email: "joe@test.com", sales: 53}
let obj2 = {name: 'hi', email:'hi@test.com', sales: 43}
let obj3 = {name:'Hello', email:"hello@hello.com"}

let arr = [obj1,obj2,obj3]

let emails = []

for( let obj of arr){
    if( obj.email){
        emails.push(obj.email)
    }
}


console.log(arr)
console.log(arr.map( data => data.email ? data.email : ''))
console.log(emails)