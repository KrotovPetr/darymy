//на вход даём объект со свойствами
//на выход я хочу получить массив ключей объекта

// [] - массив {} - объект
function zip(arr){
    const flop = []; //потому что хотим увидеть массив, не обьект

    for(const key of Object.keys(arr)){
        flop.unshift(key)
    }

    return flop;
}


console.log(zip({
    mouse: "1",
    dog: "gav"
}));