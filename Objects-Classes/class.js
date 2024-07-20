const students = {
    name : "SIdharth",
    age : 22,
    sum : function(){
        return (this.age)
    }
}
const student2 = {
    name : "abc",
    age : 23
}
student2.__proto__ = students

// JS objects have a special property called prototypes
