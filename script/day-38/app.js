//
//function init() {
   // let name = "Mozilla";
   // function displayName() {
        //console.log(name); 
    //}
    //displayName();
//}

//init();

function outer() {
    let username = "payal"
    function inner() {
        let secret = "my123"
        console.log( "inener",username)
    }

    function innerTwo() {
        console.log(innerTwo,username);
    }
    inner()
}

console.log( "TOO OUTER",username);
