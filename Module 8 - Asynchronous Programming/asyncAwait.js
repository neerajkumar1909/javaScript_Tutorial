// let take an example of coffeee shop======================

function placeOrder(drink) {
    return new Promise((resolve, reject) => {
        if (drink === 'coffee') {
            resolve('Order for Coffee received')
        } else {
            reject('Other orders are rejected')
        }
    })
}

function processOrder(order) {
    return new Promise((resolve, reject) => {
        console.log("Order is under process")
        resolve(`${order} is Served`)
    })
}

/*
// CHAINING OF PROMISE  (Without async await)==========================================
placeOrder('coffee').then(function (orderPlaced) {
    console.log(orderPlaced)
    let orderIsProcessed = processOrder(orderPlaced)
    return orderIsProcessed
})
    .then(function (processedOrder) {
        console.log(processedOrder)
    })
    .catch(function (err) {
        console.log(err)
    })
*/


// Async-Await  ====================== (to avoid chaining of promise)

async function serveOrder() {

    try {
        let orderPlaced = await placeOrder('coffee');  // change the value of coffee with other drinks and see the result
        console.log(orderPlaced);

        let orderIsProcessed = await processOrder(orderPlaced);
        console.log(orderIsProcessed)
    } catch (err) {
        console.log(err)
    }

}

serveOrder();