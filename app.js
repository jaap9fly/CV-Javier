//Menu lateral

var menu_visible=false;
let menu=document.getElementById("nav");

function mostrarOcultarMenu(){
    if(menu_visible==false){
        menu.style.display = "block";
        menu_visible=true;
    }
    else{
        menu.style.display="none";
        menu_visible=false;
    }
}

//ocultar menu al seleccionar alguna opcion

let links = document.querySelectorAll("nav a");
for(var i=0; i<links.length; i++){
    links[i].onclick = function(){
        menu.style.display="none";
        menu_visible=false;
    }
}

//barras de conocimientos por ID

function crearBarra(id_barra){
    for(i=0; i<16; i++){
        let div = document.createElement("div");
        div.className="e";
        id_barra.appendChild(div);
    }
}

//seleccionar barras para manipularlas

let html = document.getElementById("html");
crearBarra(html);

let javascript = document.getElementById("javascript");
crearBarra(javascript);

let wordpress = document.getElementById("wordpress");
crearBarra(wordpress);

let vue = document.getElementById("vue");
crearBarra(vue);

let php = document.getElementById("php");
crearBarra(php);

let sql = document.getElementById("sql");
crearBarra(sql);

let contadores = [-1,-1,-1,-1,-1,-1];
let entro= false;

function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distacia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distacia_skills>=300 && entro==false){
        entro= true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 16, 0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 11, 1, intervalJavascript);
        },100);
        const intervalWordpress = setInterval(function(){
            pintarBarra(wordpress, 15, 2, intervalWordpress);
        },100);
        const intervalVue = setInterval(function(){
            pintarBarra(vue, 11, 3, intervalVue);
        },100);
        const intervalPhp = setInterval(function(){
            pintarBarra(php, 13, 4, intervalPhp);
        },100);
        const intervalSql = setInterval(function(){
            pintarBarra(sql, 10, 5, intervalSql);
        },100);
    }
}

//llenar barra con cantidad indicada 

function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if( x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor="#922828";
    }else{
        clearInterval(interval)
    }
}

window.onscroll= function(){
    efectoHabilidades()
}
//detectar scroll de mouse para animar

