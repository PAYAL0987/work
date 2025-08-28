class User {
    constructor(username){
        this.user = username
    }

    logMe(){
        console.log('USERME is ${this.username}');
        
    }
}

class Teacher extends User {
    constructor(username,email, password) {
        super(username)
        this.email = email
        this.password =password
    }

    addCourse() {
        console.log('A new course was addes by ${this , username}');
    }
}

const chai = new Teacher("chai", "chai@Teacher.com" , "123")
chai.addCourse()

const masalChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai === Teacher);

masalChai.logMe()

console.log(chai instanceof user);
