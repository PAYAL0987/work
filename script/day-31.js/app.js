const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    //DB calls, Crytogrpah, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
}) 

promiseOne.then(function(){
console.log("Promise cosumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Asyn task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username, "code", email: "codeing@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new promise(function(resolve, reject){
    setTimeout(function() {
        let error = true 
        if(! error) {
            resolve({usernmae: "payal", paasword: "123"})
        } else {
            reject('ERROR: SOMEthing went worng')
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resloved"))


const promiseFive = new Promise(function(function(resloved, resloved){
    setTimeout(function(){
        let error = true
        if(!error) {
            resloved({username: "java", password: "123"})
        } else {
            reject('ERROR: java went worng')
        }
    },1000)
});

async function consumePromiseFiv(){
    try {
        const response = await promiseFive
        console.log(error) {
            console.log(error);
        }
    }
    
consumePromiseFive();



//async function getAllUser() {
    //try {
        //const response = await fetch('https://jsonplaceholder.type.com/user')
       // const data =response.json()
        //console.log(data);
  //  } catch(error) {
       // console.log("E:", error)
   // }
//}

//getAllUser()

fetch('https://jsonplaceholder.typecode.com/user')
.then((response) => {
    return response.json()
})
.then((data) =>{
    console.log(data);
})
.catch((error) => console.log(error))