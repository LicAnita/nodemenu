/* Selecciono las etiquetas HTML */
let selectEstacion = document.getElementById('estacion');
let dias = document.getElementById('dias');
let comensales = document.getElementById('comensales');
let btnGenerar = document.getElementById('generar');
let devuelveMenu = document.getElementById('devuelve-menu');
let menuForm = document.getElementById('menu-form');
let btnResetear = document.getElementById('resetear');
let textoOculto = document.getElementById('texto-oculto');


/* Inicializamos variables */
let estacionElegida = "";
let cantDias = "";
let cantComensales = "";
let planificacion = ['Desayuno', 'Almuerzo', 'Merienda', 'Cena'];
const regexNumero = /^[0-9]*$/;


/* Obtenemos los valores ingresados en los campos HTML */
/* Validamos el uso de los botones del formulario menú a campos completos */
selectEstacion.addEventListener('change', (event) => {    
    estacionElegida = event.target.value;

    btnResetear.disabled = false;

   toggleButtons();
});

dias.addEventListener('keyup', (event) => {
    cantDias = event.target.value;

    /* Validamos que lo ingresado por el usuario sea un numero */
    if(regexNumero.test(cantDias)){
        btnResetear.disabled = false;
        textoOculto.style.display = 'none';

    } else {
        textoOculto.style.display = 'block';
    }  

    toggleButtons();
});

comensales.addEventListener('keyup', (event) => {
    cantComensales = event.target.value;
    
    /* Validamos que lo ingresado por el usuario sea un numero */
    if(regex.test(cantComensales)){
        btnResetear.disabled = false;
        textoOculto.style.display = 'none';

    } else {
        textoOculto.style.display = 'block';
    } 
    
    toggleButtons();
});


/* Obtenemos los datos del archivo JSON */
function getData(){
    fetch('../data/menues.json')
        .then(res => res.json())
        .then(dataMenu => {
            allMenu = dataMenu; 
        });
};


/* Ejecutamos la funcion para obtener los datos del JSON */
getData();


/* Código del botón GENERAR */
btnGenerar.addEventListener("click", () => {
    devuelveMenu.innerHTML = '';
   
    /* VERANO */
    if(estacionElegida === "1"){
        /* Filtramos los menú de verano */
        const menuVerano = allMenu.filter(menu => menu.estacion !== 'invierno');

        /* Filtramos por tipo de comida */
        const desayuno = menuVerano.filter(menu => menu.tipo == 'snack');
        const almuerzo = menuVerano.filter(menu => menu.tipo == 'comida');
        const merienda = menuVerano.filter(menu => menu.tipo == 'infusion');
        const cena = menuVerano.filter(menu => menu.tipo == 'comida');
        
        /* Dibujamos en el HTML las comidas por día */
        for(let i = 1; i <= cantDias; i++){
            document.getElementById('devuelve-menu').innerHTML += `
            <ul><u>DÍA: ${i}</u></ul>
            <li><strong>Desayuno:</strong> ${desayuno[Math.floor(Math.random() * desayuno.length)].nombre}</li>
            <li><strong>Almuerzo:</strong> ${almuerzo[Math.floor(Math.random() * almuerzo.length)].nombre}</li>
            <li><strong>Merienda:</strong> ${merienda[Math.floor(Math.random() * merienda.length)].nombre}</li>
            <li><strong>Cena:</strong> ${cena[Math.floor(Math.random() * cena.length)].nombre}</li>
            <br>
            `;             
        };
    };

    /* INVIERNO */
    if(estacionElegida === "2"){
        /* Filtramos los menú de invierno */
        menuInvierno = allMenu.filter(menu => menu.estacion !== 'verano');
        
        /* Filtramos por tipo de comida */
        const desayuno = menuInvierno.filter(menu => menu.tipo == 'snack');
        const almuerzo = menuInvierno.filter(menu => menu.tipo == 'comida');
        const merienda = menuInvierno.filter(menu => menu.tipo == 'infusion');
        const cena = menuInvierno.filter(menu => menu.tipo == 'comida');
        
        /* Dibujamos en el HTML las comidas por día */
        for(let i = 1; i <= cantDias; i++){
            document.getElementById('devuelve-menu').innerHTML += `
            <ul><u><b>DÍA: ${i}</b></u></ul>
            <li><strong>Desayuno:</strong> ${desayuno[Math.floor(Math.random() * desayuno.length)].nombre}</li>
            <li><strong>Almuerzo:</strong> ${almuerzo[Math.floor(Math.random() * almuerzo.length)].nombre}</li>
            <li><strong>Merienda:</strong> ${merienda[Math.floor(Math.random() * merienda.length)].nombre}</li>
            <li><strong>Cena:</strong> ${cena[Math.floor(Math.random() * cena.length)].nombre}</li>
            <br>
            `;             
        };
    };

    /* TODOS */
    if(estacionElegida === "3"){
        /* Filtramos los menú de invierno */
        menuTodos = allMenu.filter(menu => menu.estacion === 'todos');
        
        /* Filtramos por tipo de comida */
        const desayuno = menuTodos.filter(menu => menu.tipo == 'snack');
        const almuerzo = menuTodos.filter(menu => menu.tipo == 'comida');
        const merienda = menuTodos.filter(menu => menu.tipo == 'infusion');
        const cena = menuTodos.filter(menu => menu.tipo == 'comida');
        
        /* Dibujamos en el HTML las comidas por día */
        for(let i = 1; i <= cantDias; i++){
            document.getElementById('devuelve-menu').innerHTML += `
            <ul><u><b>DÍA: ${i}</b></u></ul>
            <li><strong>Desayuno:</strong> ${desayuno[Math.floor(Math.random() * desayuno.length)].nombre}</li>
            <li><strong>Almuerzo:</strong> ${almuerzo[Math.floor(Math.random() * almuerzo.length)].nombre}</li>
            <li><strong>Merienda:</strong> ${merienda[Math.floor(Math.random() * merienda.length)].nombre}</li>
            <li><strong>Cena:</strong> ${cena[Math.floor(Math.random() * cena.length)].nombre}</li>
            <br>
            `;             
        };
    };

    /* Volvemos al estado inicial los campos y botones */
    borrarCampos();
    menuForm.reset();
    btnGenerar.disabled = true;
    btnResetear.disabled = true;
});

/* Función que habilita y deshabilita botones */
function toggleButtons(){
    if(dias.value.trim() !== "" && comensales.value.trim() !== "" && selectEstacion.value !== ""){
        btnGenerar.disabled = false;
    } else {
        btnGenerar.disabled = true;
    }
};

/* Función para el botón resetear */
btnResetear.addEventListener('click', () => {
    menuForm.reset();
    borrarCampos();
    btnGenerar.disabled = true;
    btnResetear.disabled = true;
});

/* Seteamos en "0" los campos del menu */
function borrarCampos(){
    cantDias = 0;
    cantComensales= 0;
    estacionElegida = 0;
};


