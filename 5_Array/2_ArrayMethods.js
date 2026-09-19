// Array Methods.

let arr= new Array(2,4,6,'Jayesh',8,10,true);
console.log(arr);
console.log("Length of array: ",arr.length);
console.log("=======================================");

let pushElement=arr.push(100);  // adds element to the end of array.
console.log(arr);
console.log("last index: ",pushElement);
console.log("=======================================");

let popElement=arr.pop(); // removes last element from array
console.log(arr);
console.log("Removed Element: ",popElement);
console.log("=======================================");

let unshiftElement= arr.unshifts('jayesh','100');
console.log(arr);
console.log("=======================================");

let removeElement=arr.shift();
console.log(arr);
console.log("Removed Element: ",removeElement);
console.log("=======================================");

let sliceArray=arr.slice(4); // start index
console.log(sliceArray);
console.log("=======================================");

let sliceArray1=arr.slice(2,6); // start index and end index
console.log(sliceArray1);
console.log("=======================================");

console.log(arr.slice()); // without arguments it prints copy of original array.
console.log("=======================================");

let spliceArray=arr.splice(1,3); // start from index 1 & delete 3 elements.
console.log(arr);
console.log(spliceArray);
console.log("=======================================");

let spliceArray1=arr.splice(1,0, 12,15,20); // start from index 1 & delete 0 elements.
console.log(arr);
console.log(spliceArray1);
console.log("=======================================");

let spliceArray2=arr.splice(2,1, 120); // start from index 2 & delete 1 elements and add 200.
console.log(arr);
console.log(spliceArray2);
console.log("=======================================");

let joinArray=arr.join();
console.log(joinArray);
console.log("=======================================");

let joinArray1=arr.join(" ");
console.log(joinArray1);
console.log("=======================================");

let arr1=['ROYAL ENFIELD, BMW, MERCEDES, RANGE ROVER'];
let concatArray=arr.concat(arr1);
console.log(concatArray);
console.log("=======================================");

let reverseArray=arr.reverse(); // reverse the array.
console.log(reverseArray);
console.log("=======================================");