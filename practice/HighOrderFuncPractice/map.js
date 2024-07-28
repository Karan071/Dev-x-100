// const array = [2,4,5,8,9,10,34]
// const newArr = [];
// for(let i= 0; i < array.length; i++){
//     newArr.push(array[i]*2);
// }
// console.log(newArr);

// //using map - Higher order function
// const modified_arr = array.map((x) => {
//     return x*x;
// })
// console.log(modified_arr)
// const mod = array.map((x) => x*x);
// console.log(mod)
const input = [23,45,60,45,34];

function transformation(x){
    return x*3;
}

const answer = input.map(transformation)
console.log(answer)


// # Filter
// given an input array, give me back all the even values from it 

const input2 = [2,3,4,5,6,7,8,9,10];
const result = input2.filter((x) => x%2==0)

console.log(result)


const names = ['Karan','Kiran','Kiara','Haki','Luffy']

const resNames = names.filter((x) => x.startsWith('K'));
console.log(resNames)


const mapsArr = ['Karan','kirak', '']