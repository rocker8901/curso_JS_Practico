console.log("What's up");

//Codigo cuadrado

console.group("Cuadrado");

//const ladoC = 5;

function perimetroC(lado){

    return lado*4;
}


function areaC(lado){

    return lado*lado;
}


console.groupEnd();

// Codigo Triangulo

console.group("Triangulo");


function perimetroT(base, lado1, lado2){

    return base + lado1 + lado2 ;
}

function areaT(base, altura){

    return (base * altura) / 2 ;
}

console.groupEnd();

// Codigo Circulo

console.group("Circulo");

//const radio = 10;
const pi = 3.1415;
const PI = Math.PI;

console.group("con PI definido");

function diametroC(radio){

    return radio*2;
}

function perimetroCi1 (radio){

    const diametro = diametroC(radio);
    return diametro*pi;
}

function areaCi1 (radio){

    return pi*radio*radio;
}

console.groupEnd();

console.group("Con PI usando math");

function perimetroCi2 (radio){

    const diametro = diametroC(radio);
    return diametro*PI;
}

function areaCi2(radio){

    return PI*radio*radio;
}

console.groupEnd();

console.groupEnd();


