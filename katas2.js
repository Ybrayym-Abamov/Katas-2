function add (a,b) {
    return (a+b); 
}
console.log (add(2,4));

function multiply (c,d) {
    let counter = 0; 
    for (i=0; i<c; i++) {
        counter = add(d,counter)
    }
    return counter;
}
console.log (multiply(6,8));

function power (e,f) {
    let counter = 1;
    for (h=0; h<=e; h++) {
        counter = multiply(f,counter)
    }
    return counter;
}
console.log(power(3,4));

function factorial (h) {
    let counter = 1;
    for (e=1; e<=h; e++) {
        counter = multiply(e,counter)
    }
    return counter;
}
console.log(factorial(4));

function fibonacci (j) {
    let counter = 0;
    let Num1=0
    let Num2=1
    for (x=1; x<j-1; x++) {
        counter = add(Num1,Num2)
        Num1=Num2
        Num2=counter
    }
    return counter;
}
console.log(fibonacci(8));
