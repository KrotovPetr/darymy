// Напишите функцию, которая принимает объект и возвращает новый объект, где:

//     ключи — значения исходного объекта,
//     значения — ключи исходного объекта.

// Поля исходного объекта — строки или числа.


function reverseObject(obj) {
    const reversedObject = {};

    //ключ - значение
    for (const [key, value] of Object.entries(obj)) {
        reversedObject[value] = key;
    }
    return reversedObject;
}

console.log(reverseObject({"mouse": "hellohello", "cat": "2"}));

// {
//     "mouse": "hellohello",
//     "cat": "2"
// }


//{}