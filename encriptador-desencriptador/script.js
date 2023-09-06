const TextArea = document.querySelector(".text-area");
const Mensaje = document.querySelector(".mensaje");

/*
"la letra 'e' es convertida para 'entre' "
"la letra 'i' es convertida para 'imes' "
"la letra 'a' es convertida para 'azi' "
"la letra 'o' es convertida para 'hover' "
"la letra 'u' es convertida para 'ufat' "
"la letra 's' es convertida para 'sooka' "
*/

function btnEncriptar(){
    const textoEncriptado = encriptar(TextArea.value)
    Mensaje.value = textoEncriptado
    TextArea.value = "";
}



function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "entre"], ["i", "imes"], ["a", "azi"], ["o", "hover"], ["u", "ufat"], ["s", "sooka"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
            
        }
    }
    return stringEncriptada;
}


function btnDesencriptar(){
    const textoEncriptado = desencriptar(TextArea.value)
    Mensaje.value = textoEncriptado
    TextArea.value = "";
}


function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "entre"], ["i", "imes"], ["a", "azi"], ["o", "hover"], ["u", "ufat"], ["s", "sooka"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
            
        }
    }
    return stringDesencriptada;
}


function btnCopiar(){
    let mensaje = document.querySelector(".mensaje")
    mensaje.select();
    document.execCommand("copy");
    Mensaje.value = "";
}
