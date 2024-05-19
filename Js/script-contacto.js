/* Selecciono las etiquetas HTML */
let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let email = document.getElementById('email');
let comentarios = document.getElementById('comentarios');
let btnEnviar = document.getElementById('enviar-contacto');
let contactForm = document.getElementById('contact-form');
let btnResetear = document.getElementById('resetear');


/* Inicializamos variables */
let nombreElegido = "";
let apellidoElegido = "";
let emailElegido = "";
let comentarioElegido = "";


/* Obtenemos los valores ingresados en los campos HTML */
/* Validamos el uso de los botones del formulario menú a campos completos */
nombre.addEventListener('keyup', (event) => { 
    nombreElegido = event.target.value;

    btnResetear.disabled = false;

   toggleButtons();
});

apellido.addEventListener('keyup', (event) => {
    apellidoElegido = event.target.value;
    
    btnResetear.disabled = false;

    toggleButtons();

});

email.addEventListener('keyup', (event) => {
    emailElegido = event.target.value;

    btnResetear.disabled = false;
    
    toggleButtons();

});

comentarios.addEventListener('keyup', (event) => {
    comentarioElegido = event.target.value;
    
    btnResetear.disabled = false;
    
    /* toggleButtons(); */

});

function toggleButtons(){
    if(nombre.value.trim() !== "" && apellido.value.trim() !== "" && email.value.trim() !== ""){
        btnEnviar.disabled = false;
    } else {
        btnEnviar.disabled = true;
        btnResetear.disabled = false;
    }
};


btnResetear.addEventListener('click', () => {
    contactForm.reset();
    borrarCampos();
    btnEnviar.disabled = true;
    btnResetear.disabled = true;
});


function borrarCampos(){
    cantDias = 0;
    cantComensales= 0;
    estacionElegida = 0;
};



