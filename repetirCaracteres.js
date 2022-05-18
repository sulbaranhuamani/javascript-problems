function repetirCaracteres(string){
    //separando las palabras
    let arraySplit = string.split(' ');
    let narray = new Array();
    //recorriendo las palabras y copiando en el nuevo array.
    for(var i = 0; i < arraySplit.length; i++){
        narray[i] = arraySplit[i] + arraySplit[i]
    }
    return narray.join(' ');
}
with(document){
    write('hello')
}