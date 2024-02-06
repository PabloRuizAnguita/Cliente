

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
    mostrarT();
}

function eliminarNombre(i) {
    var lista = JSON.parse(localStorage.getItem("nombres")) || [];
    lista.splice(i, 1);
    localStorage.setItem("nombres", JSON.stringify(lista));
    console.log("eliminar",i);

    mostrarT();
}


function mostrarT() {
    var lista = JSON.parse(localStorage.getItem("nombres")) || [];
    var listaHTML = "";
    
    for (var i = 0; i < lista.length; i++) {
        listaHTML += "<li>" + lista[i] + ` <button id="boton-eliminar" onclick='eliminarNombre(${i})'>Eliminar</button></li>`;
    }
    
    document.getElementById("lista").innerHTML = listaHTML;
    var tituloLista = document.getElementById("tituloLista");
    tituloLista.style.display= "block";
}

