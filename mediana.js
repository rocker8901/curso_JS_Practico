const lista = [236, 25, 3, 458, 6];

function ordenarLista(lista) {
  lista.sort(function (a, b) {
    return a - b;
  });
  return lista;
}

//const sizeLista = listaOrd.length;
ordenarLista(lista);

function esPar(dato) {
  if (dato % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function promedio(num1, num2) {
  const resul = (num1 + num2) / 2;
  return resul;
}

let mediana;
const mitadlista = parseInt(lista.length / 2);
const numero1 = lista[mitadlista - 1];
const numero2 = lista[mitadlista];

if (esPar(lista.length)) {
  mediana = promedio(numero1, numero2);
} else {
  mediana = lista[mitadlista];
}
