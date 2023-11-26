//есть начальный массив, он пустой
//тебе pop, shift, push, unshift 
// map вывести *2 к элементам



function getDoubleArray(){
    const array = [];
    // const array2 = new Array([]);
    // push, unshift 
    // 1 2 3 4 -> 3 4 1 2
    array.unshift(5);
    array.unshift(10);
    array.push(20);
    array.push(40);

    let array2 = array.map((elem)=>{
        return elem * 2;
    })

    return array2;
}



console.log(getDoubleArray());

