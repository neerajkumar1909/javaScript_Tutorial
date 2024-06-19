//Question 1 ===============================================================

const firstPromise = new Promise((res, rej) => {
    setTimeout(res, 500, 'one');
});

const secondPromise = new Promise((res, rej) => {
    setTimeout(res, 100, 'two');
});
Promise.race([firstPromise, secondPromise]).then(res => console.log(res));


// Question 2 ===============================================================

const myPromise = () => Promise.resolve('I have resolved!');

function firstFunction() {
    myPromise().then(res => console.log(res));
    console.log('second');
}

async function secondFunction() {
    console.log(await myPromise());
    console.log('second');
}

firstFunction();
secondFunction();



// Question 3 ===============================================================

var p = new Promise((resolve, reject) => {
    reject(Error('Promise Fails!'))
    })
    p.catch(error => console.log(error.message))
    p.catch(error => console.log(error.message))



//  Question 4 ===============================================================

async function f() {
    let result = 'new!';
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('done!'), 1000);
    });
    result = await promise;
    console.log(result);
}

f();