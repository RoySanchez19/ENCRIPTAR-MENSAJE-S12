let inputText = document.getElementById('inputText');
let key = document.getElementById('key');
let outputText = document.getElementById('outputText');

//Botones
const btnEncode = document.getElementById('btnEncode');
const btnDecode = document.getElementById('btnDecode');
const btnClear  = document.getElementById('btnClear');

//CODIFICAR MENSAJE
btnEncode.addEventListener('click', encode);
function encode(){
    let key = document.getElementById('key').value;
    let newText = '';

    for(let i=0; i<inputText.value.length; i++){
        // Convertir letras a numero o cod ASCCII
        let convASCII = inputText.value.charCodeAt(i);
        //VALIDA MAYUSCULA
        if(convASCII>=65 && convASCII<=90){
            //Convertir cod ASCCI a nuero a letras
            newText += String.fromCharCode((convASCII - 65 +parseInt(key))% 26 +65 );
        //VALIDA MINUSCULAS
        }else if(convASCII>=97 && convASCII<=122){
            newText += String.fromCharCode((convASCII - 97 +parseInt(key))% 26 +97 );
        //VALIDA NUMEROS Y CARACTERES ESPECIALES
        }else{
            newText += inputText.value[i];
        }
    }
    outputText.value = newText;
    return newText;
}


//DESCODIFICAR MENSAJE
btnDecode.addEventListener('click', decode);
function decode(){
    let key = document.getElementById('key').value;
    let newText = '';
    
    for(let i=0; i<inputText.value.length; i++){
        // Convertir letras Minusculas 
        let conASCII = inputText.value.charCodeAt(i);
        // Validar Mayusculas
        if(conASCII>=65 && conASCII<=90){
            newText += String.fromCharCode((conASCII - 90 - parseInt(key))% 26 + 90);
            // Validar Minusculas
        }else if(conASCII>=97 && conASCII<=122){
            newText += String.fromCharCode((conASCII - 122 - parseInt(key))% 26 +122);
            // VALIDAR NUMEROS Y CARACTERES ESPECIALES
        }else{
            newText += inputText.value[i];
        }
    }
    outputText.value = newText;
    return newText;
}

// LIMPIAR
btnClear.addEventListener('click', clear);
function clear(){
    outputText.value = '';
}