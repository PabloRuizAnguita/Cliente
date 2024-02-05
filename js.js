

function añadirT(){
    var input=document.getElementsByClassName("input")[0].value;
    localStorage.setItem("id",input);
}
function mostrarT() { 
    var json = localStorage.getItem("id");
    console.log(json);
}

