/* Problem #1
Always successful promise
*/ 
let p = new Promise((resolve, reject)=>{
    let four = 2 + 2;
    four === 4 ? resolve('Success') : reject('Failed');
}).then(
    response => console.log(`The response is: ${response}`)
).catch(
    error => console.log(`The error is: ${error}`)
);
