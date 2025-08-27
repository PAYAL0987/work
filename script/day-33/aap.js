const user = {
    username : "payal",
    loginCount : 8,
    singnedIn : true

    geUserDetails: function(){
       // console.log("Got user detail form database");
      // console.log('username: $ {username}');
      console.log(this);
    }

}
console.log(user.username);
//console.log(user.geUserDetails());


const user = {
    username : "pyl",
    loginCount : 8,
    singnedIn : true

    geUserDetails: function(){
       // console.log("Got user detail form database");
      // console.log('username: $ {username}');
      console.log(this);
    }

}
//console.log(user.username);
//console.log(user.geUserDetails());

const promiseOne = new promise()
const data = new Data()

function User(username, loginCount, isLoggedIn) {
   this.username = username;
   this.loginCount = isLoggedIn;
   this.isLoggedIn = isLoggedIn
   return this
}

const userOne= new user("payal", 12,true)
const userTwo = new User("code", 11 ,false);
const userOne(userOne);
const userTwo(userOne);