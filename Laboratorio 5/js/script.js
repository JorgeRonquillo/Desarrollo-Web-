document.write("Ejemplo 1 de JavaScript", "<br>");

var opciones = ["Opcion 1", "Opcion 2", "Opcion 3"]
for (i = 0; i < opciones.length; i++) {
    document.write(opciones[i], "<br>");
}

alert("Este es un ejemplo de alerta");

function sumaNumeros() {
    let num1 = 5;
    let num2 = 10;

    document.write(num1 + num2);
}

console.log("Mensaje de consola");

var ejemplovariable = 1000;
console.log(ejemplovariable);


function mayorNum() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

    if (num1 >= num2) {
        if (num1 == num2) {
            alert("Los numeros son iguales")
        } else {
            alert("num1 es mayor")
        }
        } else {
            alert("num2 es mayor")
        }
    }
