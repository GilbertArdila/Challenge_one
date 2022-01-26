const gettingWord = document.getElementById("GettingWord");
const GettingOutWord = document.getElementById("GettingOutWord");
var encriptar=document.getElementById("encriptar");
var desencriptar=document.getElementById("desencriptar");
var copiar=document.getElementById("copiar");
var limpiar=document.getElementById("limpiar");
/* ---------------------------Creamos función para encriptar--------------------------------------- */

encriptar.addEventListener("click",function(event){
    event.preventDefault();
    //capturamos el valor dentro del imput en una variable
    var palabra=gettingWord.value;
    //convertimos ese valor en array para poder recorrerlo
    var cripto=Array.from(palabra);
    //declaramos una variable para captar el cambio
    var reemplazo;
    //declaramos una variable para comprobar las condiciones

    if( esAcento(palabra)===false ){
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
            else if(cripto[i].includes("E")){
                reemplazo=cripto[i].replace("E","ENTER");
                cripto[i]=reemplazo;
            }
            else if(cripto[i].includes("A")){
                reemplazo=cripto[i].replace("A","AI");
                cripto[i]=reemplazo;
            }
            else if(cripto[i].includes("I")){
                reemplazo=cripto[i].replace("I","IMES");
                cripto[i]=reemplazo;


            }
            else if(cripto[i].includes("O")){
                reemplazo=cripto[i].replace("O","OBER");
                cripto[i]=reemplazo;



            }
            else if(cripto[i].includes("U")){
                reemplazo=cripto[i].replace("U","UFAT");
                cripto[i]=reemplazo;


            }

        }
        //convertimos el array en string y eliminamos las comas
        var salida=cripto.toLocaleString().replace(/,/g,"");
        GettingOutWord.value="";
        GettingOutWord.value+=salida;

    }
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
        else if (palabra.includes("AI")) {
            reemplazo = palabra.replace("AI", "A");
            palabra = reemplazo;

        }
        else if(palabra.includes("ENTER")){
            reemplazo=palabra.replace("ENTER", "E");
            palabra = reemplazo;

        }

        else if(palabra.includes("IMES")){
            reemplazo=palabra.replace("IMES", "I");
            palabra = reemplazo;

        }
        else if(palabra.includes("OBER")){
            reemplazo=palabra.replace("OBER", "O");
            palabra = reemplazo;

        }
        else if(palabra.includes("UFAT")){
            reemplazo=palabra.replace("UFAT", "U");
            palabra = reemplazo;

        }

    }
    GettingOutWord.value="";
    GettingOutWord.value+=palabra;


});
/* ---------------------------Creamos función para verificar mayusculas--------------------------------------- */
function esMayus(palabra){
    let encriptacion=true;
    //quitamos los espacios vacíos
    palabra=palabra.split("").filter(char => char!==" ");
    //convertimos la palabra en string de nuevo
    palabra=palabra.toString();
    //quitamos las comas que retorna el array
    palabra=palabra.replace(/,/g,"");

    for(var p=0;p<palabra.length;p++){
        //convertimos cada letra a mayuscula y la comparamos con la letra de la palabra
        if(palabra.charAt(p).toUpperCase()===palabra.charAt(p)){
            alert("Solo debe ingresar letras en minuscula");
            gettingWord.value="";
            encriptacion=false;
        }
    }
     return encriptacion;
}
/* ---------------------------Creamos función para verificar acentos--------------------------------------- */

function esAcento(palabra){
    //convertimos el string en array para recorrerlo
    palabra=palabra.split("");

    var acento=false;

    for(var i=0;i<palabra.length;i++){
        if(palabra[i]==="á" || palabra[i]==="é" || palabra[i]==="í"
        || palabra[i]==="ó" || palabra[i]==="ú"){
            alert("No debes ingresar palabras con acento");
            gettingWord.value="";
            acento=true;
        }
    }
    return acento;
}
/* ---------------------------Creamos función para limpiar inputs--------------------------------------- */
limpiar.addEventListener("click",function(event){
    event.preventDefault()
    gettingWord.value="";
    GettingOutWord.value="";
})
