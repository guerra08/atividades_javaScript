function separaValores(){

    var stringCompleta = document.getElementById('entString').value;

    var separado = stringCompleta.split(',');

    console.log(separado);

    return separado;

}