const gettingWord = document.getElementById("GettingWord");
const GettingOutWord = document.getElementById("GettingOutWord");
var encriptar=document.getElementById("encriptar");
var desencriptar=document.getElementById("desencriptar");
var copiar=document.getElementById("copiar");

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
    console.log(cripto.toLocaleString().replace(/,/g,""));
    var salida=cripto.toLocaleString().replace(/,/g,"");
    console.log(salida);
    GettingOutWord.value+=salida;

})