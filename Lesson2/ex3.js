//[1,2,3,4,6,7]
//найти индекс элемента, который кратен 5
//если он у нас найден, то вывести "Найден", иначе "Такого нет"


// "st + "string"

const hasArrayElement = () =>{
    let array = [1,2,3,4,5];
    let result = array.indexOf(5)
    if(result !== -1){
        return "Найден " + result
    } else {
        return "Такого нет"
    }
}

console.log(hasArrayElement());