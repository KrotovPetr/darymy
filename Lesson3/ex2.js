function zip(arr){

    const flop = {};

    for (const obj of arr){

        for (const [key, value] of Object.entries(obj)){
            if (!flop.hasOwnProperty(key)){
                flop[key] = value;
            }
        } 

    }

    return flop;
}

//hasOwnProperty
//hasOwn
//in

const obj1 = {
    mouse: "1",
    dog: "gav"
}

const obj2 = {
    cat: 'myow',
    mouse: "2"
}

const obj3 = {
    duck: 'crya'
}

console.log(zip([obj1, obj2, obj3]))