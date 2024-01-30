// Es un programa de reserva de hotel. La idea es que una persona mayor de edad pueda realizar la reserva y cargar los nombres del resto de los huéspedes. También calcula el precio con IVA.//

function comprobarEdad() {

    const EDAD = parseInt(prompt("Ingrese su edad")); 

    if(EDAD >= 18){
        
        
        function solicitarNombres() {
            let nombre = prompt("Ingrese su nombre y apellido para registrar la reserva. Este nombre solo se usará como referencia para la reserva, deberá ingresarlo nuevamente al registrar cada huésped.");
            console.log("Reserva a nombre de " + nombre);

            let cantidad = parseInt(prompt("Cantidad de personas"));
            console.log("Para " + cantidad + " personas.");

            let noches = parseInt(prompt("Cantidad de noches"));
            console.log("Estadía por " + noches + " noches.");

            let nombres = [];

            for (let i = 0; i < cantidad; i++) {
                let huesped = prompt("Ingrese el nombre y apellido del huésped " + (i + 1) + ":");
                nombres.push(huesped);
            }

            console.log("Huéspedes: ", nombres);

            function calcularPrecio() {
                const PRECIO_NOCHE_PERSONA = 10000;
                let precio = cantidad * noches * PRECIO_NOCHE_PERSONA;
                let precioIVA = precio * 1.21;
                console.log("Precio $" + precio);
                console.log("Total con IVA incluido $" + precioIVA);
            }
            calcularPrecio();
              
        }
        solicitarNombres();
        
    }else{
        alert("Debés ser mayor de 18 años para realizar una reserva.")
    }
}
const resultadoEdad = comprobarEdad();
