// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// < > 


const negativeOrPositive =(num) =>{
    // if (num > 0){
    //     return "positive"
    // } else if(num < 0){
    //     return "negative"
    // } else {
    //     return "0"
    // }

    return (num>0) ? "positive" : (num<0) ? "negative" : "0"
}
  
console.log(negativeOrPositive(7))
console.log(negativeOrPositive(-20))
console.log(negativeOrPositive(-3))
console.log(negativeOrPositive(5))
console.log(negativeOrPositive(0))


