
var mapa=[
    "******************",
    "*_________*______*",
    "*_*****___*_****_*",
    "*_____***___*____*",
    "***_*_*__*__******",
    "*___*____**__*___*",
    "*_********__**_*_*",
    "*____*______*__*_*",
    "*_**_*_******_**_*",
    "*o*__*________**f*",
    "******************"
    ];

for(var i = 0; i<mapa.length;i++){
    var string = mapa[i].split("");
    var TR = document.createElement("tr");

    for(var j =0; j<string.length; j++){
        var TD = document.createElement("td");
        TD.setAttribute("id", i+""+j);

//appemdChild = añade un nodo como el último hijo de un nodo.        
        var text = document.createTextNode(string[j]);
        TD.appendChild(text);
        TR.appendChild(TD);

        if(string[j]=="*"){
            TD.setAttribute("class", "negro");
        }else if(string[j]=="_"){
            TD.setAttribute("class", "blanco");
        }else if(string[j]=="f"){
            TD.setAttribute("class", "final");
        }else{
            TD.setAttribute("class", "inicio");
            var crearMovil = document.createElement("div");
            crearMovil.setAttribute("id", "redondo");
            TD.appendChild(crearMovil);
        }
    }
    tabla.appendChild(TR);
}

window.onload=function(){
    document.onkeydown=desplazar;//evento ONKEYDOWN se produce cuando se presiona una tecla.
};

function desplazar(objeto){
    var tecla = objeto.which; //Reconoce la tecla del teclado.
    var tag_padre = document.getElementById("redondo").parentNode.id;//devuelve el nodo padre del nodo especificado.
    var separa = tag_padre.split("");

    if (separa.length == 3) {
        separa[1] = separa[1]+""+separa[2];
    }

    var arriba = (separa[0] - 1)+ ""+separa[1];
    var abajo = (parseInt(separa[0])+1)+""+separa[1];
    var derecha = separa[0]+ "" + (parseInt(separa[1])+1);
    var izquierda = separa[0]+""+(parseInt(separa[1])-1);

    var valorArriba = document.getElementById(arriba).textContent;
    var valorAbajo = document.getElementById(abajo).textContent;
    var valorDerecha = document.getElementById(derecha).textContent;
    var valorIzquierda = document.getElementById(izquierda).textContent;

    var situacionY = document.getElementById("redondo").offsetLeft;
    var situacionX = document.getElementById("redondo").offsetTop;
        switch (tecla){
            case 37 :  
                if(valorIzquierda == "_"){
                    redondo.style.left = situacionY-220+"px";
                    var contenido = document.getElementById(tag_padre);
                    contenido.removeChild(contenido.childNodes[1]);
                    var crearMovil = document.createElement("div");
                    crearMovil.setAttribute("id", "redondo");
                    document.getElementById(izquierda).appendChild(crearMovil); 
                }
                break;

            case 38 : 
                if (valorArriba == "_") {
                    redondo.style.top = situacionX-220+"px";
                    var contenido = document.getElementById(tag_padre);
                    contenido.removeChild(contenido.childNodes[1]);
                    var crearMovil = document.createElement("div");
                    crearMovil.setAttribute("id", "redondo");
                    document.getElementById(arriba).appendChild(crearMovil);
                }
                break;

            case 39 :  
                if (valorDerecha== "_") {
                    redondo.style.left = situacionY-180+"px";
                    var contenido = document.getElementById(tag_padre);
                    contenido.removeChild(contenido.childNodes[1]);
                    var crearMovil = document.createElement("div");
                    crearMovil.setAttribute("id", "redondo");
                    document.getElementById(derecha).appendChild(crearMovil);
                }
                break;

            case 40 : 
                if (valorAbajo == "_") {
                    redondo.style.top = situacionX-180+"px";
                    var contenido = document.getElementById(tag_padre);
                    contenido.removeChild(contenido.childNodes[1]);
                    var crearMovil = document.createElement("div");
                    crearMovil.setAttribute("id", "redondo");
                    document.getElementById(abajo).appendChild(crearMovil);
                }
                break; 
            default:
                console.log("pulse otra tecla :(");
        }
}

/* 
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};
  document.addEventListener('keydown',function(){ 
            switch(window.event.keyCode){ 
                case 37: 
                    console.log("LEFT");
                break; 
                case 38: 
                    console.log("UP"); 
                break; 
                case 39: 
                    console.log("RIGHT");
                break; 
                case 40: 
                    console.log("DOWN"); 
                break; 
            } 
        }, false);*/