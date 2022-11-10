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
    var limite = document.getElementById('limite').value;
    var Listanumeros = document.getElementById('numeros');
    let par = document.getElementById('porPares');
    let imp = document.getElementById('porImpares');
    let simetria = document.getElementById('EsSimetrico');
    var arreglo = [];

    // Limpiar las opciones del select
    while(Listanumeros.options.length>0){
        Listanumeros.remove(0);
    }

    for(let con = 0; con < limite; con++) {
        let aleatorio = Math.floor(Math.random()*(50)+1); 
        Listanumeros.options[con] = new Option(aleatorio, 'valor:' + con);
        arreglo[con] = aleatorio;
     
    }
    
    let orden = ordenarValoresSelect(arreglo);

    for(let con = 0; con<limite; con++){
        Listanumeros.options[con] = new Option(orden[con]);
    }

    par.innerHTML = valorPares(arreglo).toFixed(2) + "%"; 
    imp.innerHTML = valorImpares(arreglo).toFixed(2) + "%"; 

    
    let pares = valorPares(arreglo);
    let impares = valorImpares(arreglo);

    if(pares > 75 || impares >75){
        simetria.innerHTML = "No es simetrico";
    }else {
        simetria.innerHTML = "Es simetrico";
    }



    // hacer commit 'Generacion de numeros aleatorios -listo
    // hacer commit 'Validacion de caja de texto (limite) REQUERIDO Y NUMERICO
    // hacer commit con la listanumeros ORDENADOS ASCENDENTE
}

function alerta(){
    valor = document.getElementById('limite').value;

    errorValor = document.getElementById('errorLimite');

    valor== "" ? errorValor.style.visibility = 'visible': errorValor.style.visibility = 'hidden' ;

    if(valor==0){

        alert("Faltan datos por capturar");

    }
}

// ordenar menor a mayor
function ordenarValoresSelect(numeros){
    let arr = numeros, longitudOrdenMayor = numeros.length;
    let band = false;

    while(!band){
        band = true;
        for(let i=0; i<longitudOrdenMayor; i++){
                    // [2] 97                          [1] 12
            if(arr[i] > arr[i+1]){
                aux = arr[i+1];   //aux = 12
                arr [i+1] = arr [i]; // numerosDesordenados[1] = 97
                arr[i] = aux; // numerosDesordenados [2] = 12
                band = false;
            }
        }
    }
    return arr;
}

// contar los numeros pares e impares para saber su porcentaje
// la diferencia no sea mayor al 25%

// contar numeros pares e impartes
// contar numeros pares
function valorPares(numeros){
    let contador = 0; 
    let arr = numeros;
    let numerosL = numeros.length;
    for(let i=0; i<numerosL; i++){
        if(arr[i]%2 == 0){ 

            contador++;
        }
    }
    contador = ((contador * 100) / numerosL);
    return contador;

    

}

// contar numeros impares
function valorImpares(numeros){
    let contador = 0; 
    let arr = numeros;
    let numerosL = numeros.length;
    for(let i=0; i<numerosL; i++){
        if(arr[i]%2 != 0){ 

            contador++;
        }
    }
    contador = ((contador * 100) / numerosL);
    return contador;

}
