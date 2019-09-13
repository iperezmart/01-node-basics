/**
 * Example Async/Await
 */

const exampleTitle = '[Example Async/await] ->';

let getString1 = (timeout = 1000) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`getString1 + TIMEOUT(${ timeout })`);
        }, timeout);
    });
};

let getString2 = (timeout = 1000) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`getString2 + TIMEOUT(${ timeout })`);
        }, timeout);
    });
};

let example1 = async () => {
    // El return es ahora un promesa
    return `${exampleTitle} example1 - Example String`;
};

let example2 = async () => {
    let string1 = await getString1(1000);
    let string2 = await getString2(2500);
    return `${exampleTitle} example2 - '${ string1 }',  '${ string2 }'`;
}

//////////////////////////////////////////////////////////////
// Examples
//////////////////////////////////////////////////////////////

example1().then(nombre => {
    console.log(nombre);
});

example2().then((value) => {
    console.log(value);
});
