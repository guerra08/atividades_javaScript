function addToClip(){
    var text = document.getElementById('entradaTexto');
    if(text.value!=""){
        text.select();
        if(document.execCommand('copy')){
            document.getElementById('answ').innerHTML='Texto copiado com sucesso!';
        }
    }
    else{
            document.getElementById('answ').innerHTML='Ops, algo deu errado!';
    }
}