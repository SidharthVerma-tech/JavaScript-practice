const user1 = {
    name : "Sidharth",
    address : {
        city : "faridabad",
        pincode : 121001
    }
}
const user2 = {...user1}
user2.name = "Shivanshu"
user2.address.city = "pune"
// user1 city also get changes
// shallow copy copies at only 1level

// spread operator does shallow copy

// This is deep copy using JSON.stringify and then JSON.parse
const person = {
    name : "Sidharth",
    age : 20,
    subject : ['Physics', 'Chemistry', 'Maths']
}
const person2 = JSON.parse(JSON.stringify(person))
person2.subject.push('Computer Science')


