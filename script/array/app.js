const myArr = []
//%debuggerPrint = (myArr)

//continious, Holey

//SMI (small integer)

// packet element 
// double(float, string, functions)

const arrTwo = [1, 2, 3, 4, 5,]
//PACKED _SMI_ELEMENTS


arrTwo.push(6.0)
//PACKED_DOUBLE_ELEMENTS

arrTwo.push("7")
// PACKED_ELEMENTS

arrTwo[10] = 11
//HOLEY_ELEMENTS

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[19]);

// bound check 

// arrTwo[100] = [10]

//hasOwnProperty(arrTwo, 9)
//hasOwnProperty(arrTwo.prototype,10)
//hasOwnProperty(objectTwo.prototype,10)

// holes are very expensive  in js 
 const arrThree[1,2,3,4,5]
 console.log(arrThree[2]);