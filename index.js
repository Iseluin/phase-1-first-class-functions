function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction() {
    return function namedFunction() {console.log("Hey")}
}

function returnsAnAnonymousFunction() {
    return () => {console.log("Hey")}
}