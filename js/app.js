// Arreglos
let numerosMostrar = [1, 23, 45, 2, 6, 9, 4, 15, 36, 43, 14, 19, 29, 71, 24, 12, 13, 18, 20, 10];

let numeros = [1, 23, 45, 2, 6, 9, 4, 15, 36, 43, 14, 19, 29, 71, 24, 12, 13, 18, 20, 10];

function promedio(numeros) {
    prom = document.getElementById('promedio');
    let suma = 0;
    let numerosL = numeros.length;
    for (let i = 0; i < numerosL; i++) {
        suma += numeros[i];
    } 
    return suma / numerosL;
    
}



console.log(promedio(numeros));

function valorPares(numeros){
    let contador = 0; 
    let numerosL = numeros.length;
    for(let i=0; i<numerosL; i++){
        if(numeros[i]%2 == 0){ 

            contador++;
        }
    }
    return contador;
}

console.log(valorPares(numeros));

// Función para ordenar los valores del arreglo de mayor a menor
function ordenados(numeros){
    let aux; 
    let numerosL = numeros.length;
    let band = false;
    while(!band){
        band = true;
        for(let i=0; i<numerosL; i++){
                    
            if(numeros[i+1] > numeros[i]){
                aux = numeros[i];
                numeros [i] = numeros [i+1];
                numeros[i+1] = aux;
                band = false;
            }
        }
    }    
    return numeros;
}


console.log(ordenados(numeros));


function mostrar(){
        array = document.getElementById('arreglo');
        prom = document.getElementById('promedio');
        par = document.getElementById('pares');
        ordenado = document.getElementById('orden');
    
        array.innerHTML = numerosMostrar;
        prom.innerHTML = "Promedio: " + promedio(numeros);
        par.innerHTML = "Cantidad de números pares: " + valorPares(numeros);
        ordenado.innerHTML = "Ordenados de mayor a menor son: " + ordenados(numeros);
}

//Clase

function llenar(){
    var Limite = document.getElementById('Limite').value;
    var listaNumeros = document.getElementById('numeros');
    var arreglo = [];

    while(listaNumeros.options.length>0){
        listaNumeros.remove(0);
    }

    for(let con = 0; con<Limite; con++){

        let aleatorio = Math.floor(Math.random()*50)+1;
        listaNumeros.options[con] = new Option(aleatorio,'valor:' + con);
        arreglo[con] = aleatorio;
    }

    let orden = ordenarValores(arreglo);

    for(let con = 0; con<Limite; con++){
        listaNumeros.options[con] = new Option(orden[con]);
    }
    
}
function validar(){
    validarLimite = document.querySelector('#Limite').value;

if(validarLimite == 0){
        alert('Ingrese un valor');
    }
}
function ordenarValores(numeros){
    let array = numeros, longOrden = numeros.length;
    let band = false;

    while(!band){
        band = true;
        for(let i=0; i<longOrden; i++){
            if(array[i] > array[i+1]){
                aux = array[i+1];
                array [i+1] = array [i];
                array[i] = aux;
                band = false;
            }
        }
    }
    return array;
}
//Hacer commit "Generacion de numeros aleatorios"Hecho
//Hacer commit "Validacion de caja de texto limite"Hecho
//Hacer commit "Listanumeros Ordenados Ascendente"
