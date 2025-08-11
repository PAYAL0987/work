// FUNCTIONS  and parameter



//console.log("p");
//console.log("a");
//console.log("y");
//console.log("a");
//console.log("l");

function sayMyName() {
 console.log("p");
console.log("a");
console.log("y");
console.log("a");
console.log("l");
}

//sayMyName

//function addTwoNumbers(number1, number2){
   //console.log(number1 + number2)
//}

function addTwoNumbers(number1, number2){
    //let result = number1 + number2
    
     // return result
     return number1 + number2
      
}

const result= addTwoNumbers(3, 5)
//console.log("Result:", result);


function loginUserMessage(username){
    if(username ===  undefined){
     console.log("please enter a username");
    }
    return '${username} just logged in'
}

//console.log(loginUserMessage("payal"))

//console.log(loginUserMessage())

function calculateCartPricr(val, val2, ...num1){
    return num1

}

//console.log(calculateCartPricr(200, 400, 500,2000))

const user = {
    username = "payal"
    price : 199
}

function handleObject(anyobject){
    console.log('Username is ${any object.username} and prcie is ${anyobject.price}');
}

//handleObject(user)
handleObject({ 
username: "sam",
PeriodicWave: 399
)}

const myNewArray = [200, 400, 100, 600]

functions returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue([200, 4000 ,100]);