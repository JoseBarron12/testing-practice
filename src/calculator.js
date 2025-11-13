export const calculator = (function() {
    const add = (a,b) => {
        if(typeof a != "number" || typeof b != "number") throw new TypeError("Expected two numbers");
        return a + b;
    }
    const subtract = (a,b) => {
        if(typeof a != "number" || typeof b != "number") throw new TypeError("Expected two numbers");
        return a - b;
    }
    const divide = (a,b) => {
        if(typeof a != "number" || typeof b != "number") throw new TypeError("Expected two numbers");
        return a / b;
    }
    const multiply = (a,b) => {
        if(typeof a != "number" || typeof b != "number") throw new TypeError("Expected two numbers");
        return a * b;
    }

    return {add, subtract, divide, multiply};
})();
