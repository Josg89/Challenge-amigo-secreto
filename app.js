// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Variables 
let amigo = [];
let lista = obtenerId("listaAmigos");
let resultado = obtenerId("resultado");

function obtenerDatoPorId(id) {
    return document.getElementById(id).value
}
function obtenerId(id) {
    return document.getElementById(id)
}

function crearElemento(Elemento) {
   return document.createElement(Elemento);
}

function limpiar() {
    document.getElementById('amigo').value = "";  //limpia el valor del campo del Nombre
    return;
}

function asignarTexto(elemento, texto){
    let ElementoHTML = document.getElementById(elemento);
    ElementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo() {
    resultado.innerHTML = "";
   let inputNombres = obtenerDatoPorId('amigo'); // obtiene los datos del archivo index.html
   if (inputNombres != "") {
    
        amigo.push(inputNombres); // agrega los nombres al array
            
            lista.innerHTML = "";

            amigo.forEach(function (nombre) {  
                let li = crearElemento('li');
                let p = crearElemento('p');
               // let contenido =  nombre; //   Nombre del amigo
                p.textContent = nombre; //  Agregar texto al <p>
            
                li.appendChild(p); // Agregar <p> dentro de <li>
                lista.appendChild(li); //  Agregar <li> a la lista
            })
            
            limpiar();
} 

else{
    asignarTexto("titulo2","Debe escribir el nombre del amigo secreto");
        setTimeout(() => {asignarTexto('titulo2','Digite el nombre de sus amigos')}, 2000 ) 
        return;
}}

function sortearAmigo() {
    lista.innerHTML = ""; // Borra las <li> 
    
    if (amigo.length > 0) { // Compara si el array amigo esta vacio
        resultado.innerHTML

        let amigoSecreto = amigo[Math.floor(amigo.length * Math.random())]; // Escoje un nombre aleatoria del array

         li = document.createElement("li");
         p = document.createElement("p");
         //contenido =  amigoSecreto; 
         p.textContent = amigoSecreto; 
         
         li.appendChild(p); 
         resultado.appendChild(li); 
        
        amigo.length = 0;

    }
    else{
        asignarTexto("titulo2","Debe escribir el nombre del amigo secreto");
        setTimeout(() => {asignarTexto('titulo2','Digite el nombre de sus amigos')}, 3000 ) 
        return;
    }}

