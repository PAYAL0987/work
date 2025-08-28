// Call and this javaScript

function SetUsername(usernmae){
    //complex DB
    this.username = usernmae
    console.log("called");
}

function createUser(username, email,paasword) {
    SetUsername.call(this,username)


    this.email = email
    this.paasword = paasword
}

const chai = new createUser("chai", "chai@fb.com","123")
console.log(chai);
