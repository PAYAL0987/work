// Scope level and mini hosting  in javaScript

  functions  one() {
    const username = "payal;"

    functions two(){
      const website = "school"
      console.log(website);
     }
         //console.log(website);

         two()
  }

// one()

if(true) {
    const username = "payal"
    if(username === "payal") {
        const website = "school"
        console.log(username + website);
    }
    console.log(website);
}

console.log(username);

function addOne(num) {
    return num + 1
}

console.log(addone(5))

const addTwo = function(num) {
    return num + 2
}

addTwo(5)