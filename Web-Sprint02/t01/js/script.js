let varNumber = 007;

let varBigInt = 9007199254740991n;

let varString = 'Hello World';

let varBoolean = true;

let varNull = null;

let varUndefined = undefined;

let varObject = {
    firstName : 'Salah',
    nickName : 'Lauger',
    age : null
};

let varSymbol = Symbol('LS');

function varFunction() {

}


alert('varNumber is ' + typeof(varNumber)+'\n'
    + 'varBigInt is ' + typeof(varBigInt)+'\n'
    + 'varString is ' + typeof(varString)+'\n'
    + 'varBoolean is ' + typeof(varBoolean)+'\n'
    // The type of null shows in the alert as an object type, because In JavaScript null is "nothing". It is supposed to be something that doesn't exist. 
    + 'varNull is ' + typeof(varNull)+ '\n'
    + 'varUndefined is ' + typeof(varUndefined)+'\n'
    + 'varObject is ' + typeof(varObject)+'\n'
    + 'varSymbol is ' + typeof(varSymbol)+'\n'
    + 'varFunction is ' + typeof(varFunction)+'\n'
    );