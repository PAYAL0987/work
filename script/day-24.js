// High Order Array loop

// ["", "'", ""]
// [{}, {}, {}]

const arr = [1, 2 ,3 , 4 ,5]

for(const num of arr) {
    console.log(num);
}

const greeting = "hello world"
for (const greek of greeting) {
    console.log('Each char is ${greek}')
}


// Maps

const map = new map()
map.set('In', "India")
map.set('USA' "United States of america")
map.set('Fr', "India")

//console.log(map);

for (const [ker, value] of map) {
   // console.log(key, ":-", value);
}

const myObject = {
    'game1' : 'NFS',
    'game2' : "Spiderman"
}

for(const [key, value] of myObject) {
    console.log(key, ":-", value);
}