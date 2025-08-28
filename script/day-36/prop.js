class User{
    constructor(Username) {
        this.Username =Username
    }

    logME(){
        console.log('username: ${this.user}');
        
    }

    static createdId(){
        return '123'
    }
}

const payal = new user("payal")
//console.log(payal.createdId())


class Teacher extends user {
    constructor(email) {
        super =(username)
        this.email =email
    }
}


const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createdId());