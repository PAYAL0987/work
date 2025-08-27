// Prototype in javaScript

function multipleBy(num) {
    return num*5
}

multipleBy5.power = 2
console.log(multipleBy5(5));
console.log(multipleBy5,power);
console.log(multipleBy5.prototype);

function creatUser(username, score) {
    this.username = username
    this.score = score
}


creatUser.prototype.increment = function() {
    this.score++
}
creatUser.prototype.increment = function() {
    console.log('score  is ${this.score}');
}

const code = new creatUser("code",2)
const tea = creatUser("tea",250)

code.printMe()