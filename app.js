function encriptarTexto(texto) {
    // Realizar las sustituciones de vocales
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");

    return texto;
}

function desencriptarTexto(textoEncriptado) {
    // Realizar las sustituciones inversas de vocales
    textoEncriptado = textoEncriptado.replace(/enter/g, "e");
    textoEncriptado = textoEncriptado.replace(/imes/g, "i");
    textoEncriptado = textoEncriptado.replace(/ai/g, "a");
    textoEncriptado = textoEncriptado.replace(/ober/g, "o");
    textoEncriptado = textoEncriptado.replace(/ufat/g, "u");

    return textoEncriptado;
}


function encriptar() {
    var textoOriginal = document.getElementById("texto").value;
    var textoEncriptado = encriptarTexto(textoOriginal);
    document.getElementById("mi_imagen").style.display = "none";
    document.getElementById("aviso1").style.display = "none";
    document.getElementById("aviso2").style.display = "none";
    document.getElementById("textoEncriptado").style.display = "block";
    var textoEnc = document.getElementById("textoEncriptado");
    textoEnc.textContent = textoEncriptado;
    document.getElementById("botonCopiar").style.display = "block";
}

function desencriptar() {
    var textoEnc = document.getElementById("texto").value;
    var textoDesncriptado = desencriptarTexto(textoEnc);
    document.getElementById("mi_imagen").style.display = "none";
    document.getElementById("aviso1").style.display = "none";
    document.getElementById("aviso2").style.display = "none";
    document.getElementById("textoEncriptado").style.display = "block";
    var textoDesenc = document.getElementById("textoEncriptado");
    textoDesenc.textContent = textoDesncriptado;
    document.getElementById("botonCopiar").style.display = "block";
}

function copiarTexto() {
    var parrafo = document.getElementById("textoEncriptado");

    var textareaTemporal = document.createElement("textarea");
    textareaTemporal.value = parrafo.textContent;

    // Agregar el textarea al documento
    document.body.appendChild(textareaTemporal);

    // Seleccionar y copiar el texto
    textareaTemporal.select();
    document.execCommand("copy");

    // Eliminar el textarea temporal
    document.body.removeChild(textareaTemporal);
}

