/// CODIGO DE JUEGO DE NÚMEROS
let numeroSecreto = 0;
let conteoDeIntentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados); 

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElementos('p', 'Ya haz sorteado todos los números posibles.');
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function asignarTextoElementos(eLemento, texto) {
    let elementoHTML = document.querySelector(eLemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElementos('p',`¡Acertaste el número! Lo adivinaste en ${conteoDeIntentos} ${(conteoDeIntentos == 1) ? 'intento' : 'intentos'}`);
        // Activar botón de Reinicio 
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElementos('p','El número secreto es menor.');
        } else {
        asignarTextoElementos('p','El número secreto es mayor.');
                }
    } conteoDeIntentos++;
    limpiarCaja();
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales() {
    //Se configura las opciones inciales del juego. 
    asignarTextoElementos('h1', 'Juego del numero secreto!');
    asignarTextoElementos('p', `Inidica un numero entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    conteoDeIntentos = 1;    
}

function reiniciarJuego() {
    // limpiar la caja
    limpiarCaja();
    // actualizar el numero secreto
    // actualizar numero de intentos
    // colocar mensajes iniciales
    condicionesIniciales();
    // dehabilitar el botón de reinicio
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();


/// DESAFIOS

let listaGenerica = [];
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
let listaDeNumeros = [8, 9, 6, 4, 1, 5, 2, 3];

lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang'); 

function listaPrueba(x) {
    console.log(x);
}

function listaPruebaReversa(x) {
    let reversed = x.reverse();
    console.log(reversed);
}

function sumatoriaYPromedio(x){
    let suma = 0;
    for(let i = 0; i < x.length; i++){
        suma += x[i];
    }
    console.log(suma);
    let promedioDeLista = suma/x.length;
    console.log(promedioDeLista);
}

function maximoMinimo(x){
    let maximo = Math.max(...x);
    let minimo = Math.min(...x);
    console.log(`El número máximo es: ${maximo}`)
    console.log(`El número mínimo es: ${minimo}`)
    console.log(x);
    console.log(...x);
}

function agregarlistas(x, y){
    let listaEnConjunto = [];
    for (let i = 0; i < x.length; i++){
        listaEnConjunto.push(x[i], y[i]); 
    } console.log(listaEnConjunto);
}

function listaAlCuadrado(x){
    for (let i = 0; i < x.length; i++){

    }
}
agregarlistas(listaDeNumeros, lenguagesDeProgramacion);


/*sumatoriaYPromedio();
maximoMinimo(listaDeNumeros);
*/













/*
function maximoMinimo (lista){
    let elementoInicial = lista[0];
    let ultimoElemento = lista.length-1;
    let elementoFinal = lista[ultimoElemento];
    console.log(`El primer elemento de la lista es: ${elementoInicial}`);
    console.log(`El elemento final de la lista es: ${elementoFinal}`);
} */
