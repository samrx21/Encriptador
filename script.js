
function encriptar () {
    var texto= document.getElementById("texto").value.toLowerCase();
    var txtCifrado = texto.replace(/e/igm,"enter");
    txtCifrado=txtCifrado.replace(/o/igm,"ober");
    txtCifrado=txtCifrado.replace(/i/igm,"imes");
    txtCifrado=txtCifrado.replace(/a/igm,"ai");
    txtCifrado=txtCifrado.replace(/u/igm,"ufat");
    
    
    imprimirEnElDom(txtCifrado);
}

function desencriptar () {
    var texto= document.getElementById("texto").value.toLowerCase();
    var txtCifrado = texto.replace(/enter/igm,"e");
    txtCifrado=txtCifrado.replace(/ober/igm,"o");
    txtCifrado=txtCifrado.replace(/imes/igm,"i");
    txtCifrado=txtCifrado.replace(/ai/igm,"a");
    txtCifrado=txtCifrado.replace(/ufat/igm,"u");
    
    
    imprimirEnElDom(txtCifrado);
}

function imprimirEnElDom(mensaje) {
    const outputResponse = document.querySelector("#mostrar");
    outputResponse.innerHTML = `
      <div class="results">
        <div class="text-result">
            <textarea name="name" id="areaTexto"  rows=5>${mensaje}</textarea>
        </div>
        <button id="btn-copiar" onclick="copiar()">Copiar</button>
      </div>`;
  }
function copiar() {
    var contenido =document.querySelector("#areaTexto");
    contenido.select();
    document.execCommand("copy");
    
}