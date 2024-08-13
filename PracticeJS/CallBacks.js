//Callback functions :
// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.


//  # without the use of callbacks
//find the square of the input
function square(n){
    return n*n;
}

function cube(n){
    return n * n * n;
}

//finds the sum of the squares of the input
function sumOfSquare(a,b){
    const val_1 = square(a);
    const val_2 = square(b);
    return val_1 + val_2;
}

function sumOfCube(a,b){
    const val_1 = cube(a);
    const val_2 = cube(b);
    return val_1 + val_2;
}

console.log(sumOfSquare(5,10));
console.log(sumOfCube(5,10));


//  # Better way with call back functions
function squareFun(n){
    return n * n;
}
function cubeFun(n){
    return n * n * n;
}
function sumOfSomething(a, b, fn){
    const x = fn(a);
    const y = fn(b);
    return x + y;
}

console.log(sumOfSomething(5,10,squareFun));
console.log(sumOfSomething(5,10,cubeFun));

