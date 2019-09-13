/**
 * Example Promise
 */

const exampleTitle = '[Example Promise] ->';

let example = (param = true) => {
    return new Promise((resolve, reject) => {
        console.log(`${exampleTitle} Promise execution...`);
        
        if (param === true) {
            resolve();
        }
        else {
            reject();
        }
    });
};

let testPromise = (test) => {
    example(test === true)
        .then(() => {
            console.log(`${exampleTitle} Promise executed and resolved!`);
        })
        .catch(() => {
            console.log(`${exampleTitle} Promise executed and rejected!`);
        });
};

//////////////////////////////////////////////////////////////
// Examples
//////////////////////////////////////////////////////////////

testPromise(true);
testPromise(false);
