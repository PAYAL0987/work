// object in depth in javaScript

// singleton 

// object literals 
const mySym = Symbol("key1")

const Jsuser = {
    name: "payal",
    full name : "payal choudhary",
    
    age : 18,
    location : "bihar",
    email: "payalchaudhary@.com",
    isLoggedIn : false,
    lastLoginDays: ["monday", "tuesday"],
}

console.log(Jsuser.email)
console.log(Jsuser["email"])
console.log(Jsuser."fullname")

Jsuser.email = "payal@chudhary.com"
console.log(Jsuser);

Jsuser.greeting = functions(){
    console("hello  js user");
}

