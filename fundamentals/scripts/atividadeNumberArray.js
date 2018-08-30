function numberToArray(){
    var number = document.getElementById('entradaNumero').value;
    number.toString();
    var arrayString = [];
    
    for (i = 0; i<number.length; i++){
        arrayString[i] = number.charAt(i);
    }
    
    console.log(arrayString);

    return arrayString;
}