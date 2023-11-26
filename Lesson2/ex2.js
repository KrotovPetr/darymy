//[1,2,3,4,5, 0]
//3 способами посчитать сумму элементов в массиве
//reduce, forEach, for



const getArraySum = () => {
    let array = [1,2,3,4,5,0];
    // let sum = array.reduce((a, b)=>{return a + b}, 0)
    // let sum = 0;
    // for (let i=0; i < array.length; i++){
    //     sum = sum + array[i];
    // }
    let sum = 0;
    array.forEach((elem, index)=>{
        console.log("i ", index);
        sum = sum + elem;
    }) 


    return sum
}

console.log(getArraySum());


