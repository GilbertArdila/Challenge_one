const gettingWord = document.getElementById("GettingWord");
const GettingOutWord = document.getElementById("GettingOutWord");
var encriptar=document.getElementById("encriptar");
var desencriptar=document.getElementById("desencriptar");
var copiar=document.getElementById("copiar");
/* ---------------------------Creamos función para encriptar--------------------------------------- */

encriptar.addEventListener("click",function(event){
    event.preventDefault();
    //capturamos el valor dentro del imput en una variable
    var palabra=gettingWord.value;
    //convertimos ese valor en array para poder recorrerlo
    var cripto=Array.from(palabra);
    var reemplazo;

    //recorremos el array y reemplazamos las letras
    for(var i=0;i<cripto.length;i++){
        if(cripto[i].includes("a")){
            reemplazo=cripto[i].replace("a","ai");
            cripto[i]=reemplazo;
        }
        else if(cripto[i].includes("e")){
            reemplazo=cripto[i].replace("e","enter");
            cripto[i]=reemplazo;


        }
        else if(cripto[i].includes("i")){
            reemplazo=cripto[i].replace("i","imes");
            cripto[i]=reemplazo;


        }
        else if(cripto[i].includes("o")){
            reemplazo=cripto[i].replace("o","ober");
            cripto[i]=reemplazo;



        }
        else if(cripto[i].includes("u")){
            reemplazo=cripto[i].replace("u","ufat");
            cripto[i]=reemplazo;


        }

    }

   //convertimos el array en string y eliminamos las comas
    var salida=cripto.toLocaleString().replace(/,/g,"");
    GettingOutWord.value="";
    GettingOutWord.value+=salida;

})

/* ---------------------------Creamos función para el copy del botón--------------------------------------- */
copiar.addEventListener("click",function(event){
    event.preventDefault();
    //limpiamos el campo de ingreso
    GettingWord.value="";
    //seleccionamos el texto
    GettingOutWord.select();
    //copiamos la selección
    document.execCommand("copy");

});
/* ---------------------------Creamos función para desencriptar--------------------------------------- */
desencriptar.addEventListener("click",function(event) {
    event.preventDefault();
    var palabra = gettingWord.value;
    //convertimos ese valor en array para poder recorrerlo
    var cripto = Array.from(palabra);
    var reemplazo;

    for(var i=0;i<palabra.length;i++) {
        if (palabra.includes("ai")) {
            reemplazo = palabra.replace("ai", "a");
            palabra = reemplazo;

        }
        else if(palabra.includes("enter")){
            reemplazo=palabra.replace("enter", "e");
            palabra = reemplazo;

        }

        else if(palabra.includes("imes")){
            reemplazo=palabra.replace("imes", "i");
            palabra = reemplazo;

        }
        else if(palabra.includes("ober")){
            reemplazo=palabra.replace("ober", "o");
            palabra = reemplazo;

        }
        else if(palabra.includes("ufat")){
            reemplazo=palabra.replace("ufat", "u");
            palabra = reemplazo;
            
        }

    }
    GettingOutWord.value="";
    GettingOutWord.value+=palabra;


});