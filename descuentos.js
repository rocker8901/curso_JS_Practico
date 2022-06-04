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

    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;

    const coupons = [
        {
            name: "Kilo",
            discount: 10
        },
        {
            name: "Mega",
            discount: 20            
        },
        {
            name: "Giga",
            discount: 30
        }
    ];

    const isCouponValueValid = function(coupons){

        return coupons.name === couponValue;        
    }
 
    const userCoupon = coupons.find(isCouponValueValid);

    if (!userCoupon){
        alert ("El cupon " + couponValue + " no es valido");
    }
    
    else {

        const descuento = userCoupon.discount;
        const valorFinalCompra = precioConDescuento(valueP, descuento);
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio final es " + valorFinalCompra;
    }
}

