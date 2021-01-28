let promise = new Promise((resolve, reject)=>{
    setTimeout(()=> resolve("You are now 5 seconds closer to death."), 5000);
})
.then(
    value => console.log(value)
)
.catch(
    error =>console.log(error)
);