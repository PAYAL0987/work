// Class constructor and static

// ES 6

class User {
    constructor(user, email, passwoed) {
        this.user = username;
        this.email = email;
        this.passwoed =passwoed
    }


    encryptPassword() {
    return '${this.password}abc'
}
changeusername() {
    return '$(this.username.toUpperCase()}'
}


}
const tea = new ("tea", "tea@gamil.com","123")

console.log(tea.encryptPassword());

console.log(tea.changeusername());

User.prototype.encryptPassword = function(){
    return ${this.passwoed}abc
}