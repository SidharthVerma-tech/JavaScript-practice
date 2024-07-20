class User{
    constructor(name, email){
        console.log("Contructor called")
        this.name = name
        this.email = email
    }
    viewData(){
        console.log("Hello")
        console.log(this.name)
        console.log(this.email)
    }
}
class Admin extends User{
    constructor(name, email){
        super(name, email)
    }
    editData(name, email){
        
        // this.name = name
        // this.email = email
    }
}
let obj = new User("Sidharth", "xyz@gmail.com")
let newObj = new Admin()