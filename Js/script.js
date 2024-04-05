let comidasInvierno = [
"guiso de lentejas",
"guiso de arroz",
"guiso de fideos",
"tortilla de papa",
"pastas salteadas con vegetales",
"tarta de ricota con acelga",
"tarta de zapallito con queso",
"empanadas de pollo",
"empanadas de carne",
"bife con zanahoria y huevo",
"supremas de pollo con tomate y huevo",
"ñoquis con salsa",
"fideos con salsa",
"ravioles con crema",
"lasagna de pollo, ricota y jamón",
"pizza",
"tarta de pollo",
"pastel de papa",
"milanesa de carne con puré",
"milanesa de pollo con papas y batatas al horno",
"pollo a la provenzal con fideos",
"tarta de espinaca y huevo",
"pizza de jamón y morrones",
"cabutia al horno relleno",
"polenta con tuco y queso",
];

let comidasVerano = [
"pastas salteadas con vegetales",
"bife con zanahoria y huevo",
"tarta de atún y huevo",
"supremas de pollo con tomate y huevo",
"ñoquis con salsa",
"fideos con salsa",
"ravioles con crema",
"ensalada cesar",
"pizza",
"tarta de pollo",
"tarta de jamón y queso",
"milanesa de carne con ensalada",
"milanesa de pollo con ensalada",
"milanesa de pollo con arroz",
"pollo a la provenzal con fideos",
"tarta de espinaca y huevo",
"pizza de jamón y morrones",
"arroz con atún y huevo",
];
let infusiones = ["café con leche", "mate", "mate cocido"];

let btn = document.querySelector("#boton");

//Releva la cantidad de días
function relevarDias() {
    let dias = document.getElementById("dias");
    return dias.value;
    }

//Releva el código de la estacion
function relevarEstacion() {
    let estacion = document.getElementById("estacion");
    return estacion.value;
    }

//Releva la cantidad de comensales
function relevarComensales() {
    let comensales = document.getElementById("comensales");
    return comensales.value;
    } 

btn.addEventListener("click", () => {
    let dias = relevarDias();
    let estacion = relevarEstacion();
    let comensales = relevarComensales();
    let comidasEstacion;

    if (estacion === "1") {
        comidasEstacion = comidasVerano;
    } else if (estacion === "2") {
        comidasEstacion = comidasInvierno;
    }
});

