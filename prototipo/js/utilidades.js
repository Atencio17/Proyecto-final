function crearTagConTexto(tagHTML, texto) {
    var tagHTML = crearTag(tagHTML);
    var textoHTML = document.createTextNode(texto);
    tagHTML.appendChild(textoHTML);
    return tagHTML;
}


function crearTagImage(path) {
    var tagIMG = document.createElement("img");
    tagIMG.src = path;
    return tagIMG;    
}

function agregarElemento(elemento) {
    document.body.appendChild(elemento);
}

function crearTagA(texto, url) {
    var tagIMG = crearTagConTexto("a",texto);
    tagIMG.href = url;
    return tagIMG;
}

function crearTag(tag) {
    var tagHTML = document.createElement(tag);
    return tagHTML;
}

function agregarElementoContenedor(contenedor, elemento) {
    contenedor.appendChild(elemento);
}

function loguear() {

    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;
    
    if (usuario== "admin" && password=="123") {
        window.location.href = "administrator.html";
    } else if (usuario== "gerente" && password=="123") {
        window.location.href = "manager.html";
    } else if (usuario== "secretario" && password=="123") {
        window.location.href = "secretary.html";
    } else if (usuario == "cliente" && password == "123"){
        window.location.href = "customer.html";
    } else if (usuario == "vendedor" && password =="123"){
        window.location.href = "seller.html";
    }else {
        alert("Usuario o password errado");
    }
}

function agregarTelefono() {
    var telefono = document.getElementById("telefono").value;
    var textarea = document.getElementById("area");
    if(telefono != ""){
    textarea.innerHTML += "Teléfono: "+telefono+" - ";
    }else{
        alert("No ingresó un télefono");
    }
}
function agregarTelefono1() {
    var telefono1 = document.getElementById("telefono1").value;
    var textarea = document.getElementById("area1");
    if(telefono1 != ""){
    textarea.innerHTML += "Teléfono: "+telefono1+" - ";
    }else{
        alert("No ingresó un télefono");
    }
}
function agregarAccesorio() {
    var accesorios = document.getElementById("accesorios").value;
    var textarea = document.getElementById("areas");
    if(accesorios != ""){
    textarea.innerHTML += "Accesorio: "+accesorios+" - ";
    }else{
        alert("No ingresó un Accesorio");
    }
}
function agregarRed() {
    var redSocial = document.getElementById("redSocial").value;
    var textarea = document.getElementById("area2");
    if(redSocial != ""){
    textarea.innerHTML += "Red social: "+redSocial+" - ";
    }else{
        alert("No ingresó ninguna red social");
    }
}
function agregarid() {
    var identificacion = document.getElementById("identificacion").value;
    var textarea = document.getElementById("area3");
    if(identificacion != ""){
    textarea.innerHTML += "Identificación: "+identificacion+" - ";
    }else{
        alert("No ingresó ninguna identificación");
    }
}

function comprar() {
    var input1 = document.getElementById("name1").value;
    var input2 = document.getElementById("docu1").value;
    var input3 = document.getElementById("num1").value;
    if (input1 == "" || input2 == "" || input3 == "") {
        
    }else{
        alert("Compra realizada");
    }
}

function comprar1() {
    var input1 = document.getElementById("name2").value;
    var input2 = document.getElementById("docu2").value;
    var input3 = document.getElementById("num2").value;
    var input4 = document.getElementById("fecha1").value;
    var input5 = document.getElementById("fecha2").value;
    var input6 = document.getElementById("cv").value;
    if (input1 == "" || input2 == "" || input3 == "" || input4 == "" || input5 == "" || input6 == "") {
        
    }else{
        alert("Compra realizada");
    }
}

function alertar() {
    alert("Compra realizada");
}

