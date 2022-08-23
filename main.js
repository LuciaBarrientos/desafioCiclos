// mensaje inicial
alert("NUESTROS PRODUCTOS: \nRemera - Pantalon - Short - Buzo - Camisa");

// definicion de limite 
let limite = parseInt(prompt("Ingresá la cantidad de productos que querés encargar"));

// seleccion de prendas

for (let i = 1 ; i <= limite ; i++) {
    // seleccion de prenda
    let prenda = prompt("Ingresá la prenda que querés:");

    if (prenda==null) {
        alert("No ingresaste ninguna prenda. Por favor, intentá de nuevo.");
        i = i-1;
        continue;
    }

    else {
        // seleccion de talle
        let talle = prompt("Ingresá el talle que buscás. \nS - M - L - XL").toUpperCase ();

        if ((talle=="S") || (talle=="M") || (talle=="L") || (talle=="XL")) {
            alert("Ingresaste: " + prenda + " talle " + talle);
        }
        
        else {
            alert("Ingresaste un talle incorrecto. Por favor, volvé a cargar la prenda.");
            i = i-1;
            continue;
        }
        console.log ("Detalle del pedido:" + prenda + " " + talle);
    }
}

alert("Tu pedido ha sido registrado!");