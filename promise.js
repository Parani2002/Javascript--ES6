// const promise  = new Promise((resolve,reject) => {
//     let isAvailable = false;
//     if(isAvailable){
//         resolve("Successfully ordered your product")
//     }else{
//         reject("Currently out of stock")
//     }
// })

// console.log(promise);

// promise.then(data => console.log(data)).catch((error) => console.log(error))


// promise.then(console.log("Order successfully accepted"))


const promise = new Promise((resolve, reject) => {
    let isAvailable = false;
    if (isAvailable) {
        resolve("Successfully ordered your product");
    } else {
        reject("Currently out of stock");
    }
});

promise
    .then(data => {
        console.log(data);
        console.log("Order successfully accepted");
    })
    .catch(error => {
        console.log(error);
        console.log("Order could not be processed");
    });




