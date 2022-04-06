//normal function
function sum(a, b) {
    return a +b;
}

function isPositive(number) {
    return number >= 0;
}

function randomNumber() {
    return Math.random();
}

/**
document.addEventListener('click', function() {
    console.log('Click');
}) **/

class Person {
    constructor(name) {
        this.name = name;
    }

    printNameArrow() {
        setTimeout(() => {
            console.log('Arrow: ' + this.name);
        }, 100);
    }

    printNameFunction() {
        setTimeout(function() {
            console.log('Function ' + this.name)
        }, 100);
    }
}

//handles the scope of this in a much more intuitive way.



let person = new Person('bob');
person.printNameFunction();
person.printNameArrow();

//arrow function
let sum2 = (a,b) => a + b
let isPositive2 = (number) => number >= 0;
let randomNumber2 = () => Math.random;
//document.addEventListener('click', () => console.log('Click'))


