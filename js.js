

function añadirT(){
    var input=document.getElementsByClassName("input")[0].value;
    var lista = JSON.parse(localStorage.getItem("nombres")) || [];
    lista.push(input);
    localStorage.setItem("nombres", JSON.stringify(lista));
    alert("Su nombre se ha añadido correctamente.");
    document.getElementsByClassName("input")[0].value = "";
    
}


function cleanT() {
    localStorage.removeItem("nombres");
    alert("La plantilla ha sido eliminada.");
    var tituloLista = document.getElementById("tituloLista");
    tituloLista.style.display= "none";
    actualizarT();
}

function eliminarNombre(i) {
    var lista = JSON.parse(localStorage.getItem("nombres")) || [];
    lista.splice(i, 1);
    localStorage.setItem("nombres", JSON.stringify(lista));
    console.log("eliminar",i);

    actualizarT();
}


function mostrarT() {

    if(!aparecer){
    var lista = JSON.parse(localStorage.getItem("nombres")) || [];
    var listaHTML = "";
    
    for (var i = 0; i < lista.length; i++) {
        listaHTML += "<li>" + lista[i] + ` <button id="boton-eliminar" onclick='eliminarNombre(${i})'>Eliminar</button></li>`;
        aparecer=true;
    }
    var listilla = document.getElementById("lista");
        listilla.style.display= "block";
    document.getElementById("lista").innerHTML = listaHTML;
    var tituloLista = document.getElementById("tituloLista");
    tituloLista.style.display= "block";
    
    }else{
        var titulo1 = document.getElementById("tituloLista");
        titulo1.style.display= "none";
        var listilla = document.getElementById("lista");
        listilla.style.display= "none";
        
        aparecer=false;
}
}

function actualizarT() {
    var lista = JSON.parse(localStorage.getItem("nombres")) || [];
    var listaHTML = "";
    
    for (var i = 0; i < lista.length; i++) {
        listaHTML += "<li>" + lista[i] + ` <button id="boton-eliminar" onclick='eliminarNombre(${i})'>Eliminar</button></li>`;
    }
    
    document.getElementById("lista").innerHTML = listaHTML;
    var tituloLista = document.getElementById("tituloLista");
    tituloLista.style.display= "block";
    var listilla = document.getElementById("lista");
        listilla.style.display= "block";
}

