var mapa=[
"******************",
"*_________*______*",
"*_*****_____******",
"*______***__*__*_*",
"***_*____*____**_*",
"*___*____**__*___*",
"*_********__**_*_*",
"*____*______*__*_*",
"*_**_*__*****_**_*",
"*o*__*________**W*",
"******************"];

for(var i = 0; i<mapa.length;i++){
	var string = mapa[i].split("");
	var TR = document.createElement("tr");
	for(var j =0; j<string.length; j++){
		var TD = document.createElement("td");
		var text = document.createTextNode(string[j]);
		TD.appendChild(text);
		TR.appendChild(TD);
		if(string[j]=="*"){
			TD.setAttribute("class", "negro");
		}else if(string[j]=="_"){
			TD.setAttribute("class", "blanco");
		}else if(string[j]=="W"){
			TD.setAttribute("class", "final");
		}else{
			TD.setAttribute("class", "inicio");
		}
	}
	tabla.appendChild(TR);
}
//console.log(string);


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
        }, false);