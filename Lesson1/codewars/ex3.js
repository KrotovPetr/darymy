// операция + - *
// два аргумента

const calculator = (operation, num1, num2) =>{
    return operation==="+" ? num1 + num2 : operation==="-" ? num1 - num2 : num1 * num2
}

console.log(calculator("+", 10, 3))
console.log(calculator("-", 10, 3))
console.log(calculator("*", 10, 3))


