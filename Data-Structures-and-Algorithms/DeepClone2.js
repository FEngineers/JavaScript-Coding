var arr1 = [1, '2', ['a', 'b'], 3, '4'];

//var arr2 = arr1.slice();

var arr2 = JSON.parse(JSON.stringify(arr1));
arr1[2].pop();

console.log(arr1);
console.log(arr2);
