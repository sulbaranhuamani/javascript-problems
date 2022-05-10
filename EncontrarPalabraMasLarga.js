function palabraMasLarga(array) {
    //separando palabra con espacios
    var arraySplit = array.split(' ');
    //almacenando la palabra mas larga
    var longesword = '';
    //recorrer e ir comprobando el mayor caracter
    for(var i = 0; i < arraySplit.length; i++){
        if (longesword < arraySplit[i].length){
            longesword = arraySplit[i];
        }
    }
    return longesword;
}

//salida
with (document){
    write(palabraMasLarga("ornitorrinco hol"))
}