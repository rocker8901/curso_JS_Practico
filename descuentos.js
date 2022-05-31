//const precioInicial = 100;
//const descuento = 15;

function precioConDescuento (precio, descuento){

    const descuentoPorcentaje = descuento/100;
    const precioFinal = precio - (precio * descuentoPorcentaje);

    return precioFinal;

}

function obtenerPrecio(){

    const inputP = document.getElementById("inputP");
    const valueP = inputP.value;

    const inputD = document.getElementById("inputD");
    const valueD = inputD.value;

    const valorFinalCompra = precioConDescuento(valueP, valueD);

    console.log(valorFinalCompra);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio final es " + valorFinalCompra;
    //alert(valorFinalCompra);
}

