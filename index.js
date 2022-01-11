function receivesAFunction(cb) {
    console.log(cb());
}

function returnsANamedFunction() {
    return function namedFunction() {
        console.log('Named function has been returned!')
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log('Annonymous function has been returned!');
    }
}