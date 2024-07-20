const user1 = {
    name : "Sidharth",
    age : 20
}
// Shallow copy
// const user2 = user1
// user2.age = 25
// in this both have the same reference

// Depp copy
// Value of user1 did not changed because of deep copy
// new object 3 is created 
const user3 = {}
Object.assign(user3, user1)
user3.age = 28
// spread operator creates a deep copy at only 1 level
const user4 = {...user1}
user4.name = "Shivanshu"

const fruits = ["Apple", "Mango", "Banana"]

let myFruits = [...fruits]
myFruits.push("Strawberry")
myFruits.push("PineApple")



