// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Variables 
let amigos = [];
let lista = document.getElementById("listaAmigos")
let resultado = document.getElementById("resultado")

function agregarAmigo() {
    resultado.innerHTML = "";
   let inputNombres = document.getElementById("amigo").value; // obtiene los datos del index.html
   if (inputNombres != "") {
    
        amigos.push(inputNombres); // agrega los nombres al array
            
            lista.innerHTML = "";

            amigos.forEach(function (nombres) {  
                const li = document.createElement("li");
                const p = document.createElement("p");
                let contenido =  nombres; //  Usar el nombre individual
                p.textContent = contenido; //  Agregar texto al <p>
            
                li.appendChild(p); // Agregar <p> dentro de <li>
                lista.appendChild(li); //  Agregar <li> a la lista
            })

            document.getElementById("amigo").value = ""; //limpia el valor de capo del Nombre
} 

else{
    alert("Debe de escribir un nombre");
}}

function sortearAmigo() {
    lista.innerHTML = ""; // Borra las <li> 
    
    if (amigos.length > 0) { // Compara si el array amigo esta vacio
        resultado.innerHTML

        let amigoSecreto = amigos[Math.floor(amigos.length * Math.random())]; // Escoje un nombre aleatoria del array

         li = document.createElement("li");
         p = document.createElement("p");
         contenido =  amigoSecreto; 
         p.textContent = contenido; 
         
         li.appendChild(p); 
         resultado.appendChild(li); 
        
        amigos.length = 0;

    }
    else{
        alert("Debe de escribir un nombre para empezar a sortear")
    }}

