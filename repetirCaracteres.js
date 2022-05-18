function repetirCaracteres(string){
    let arraySplit = string.split(' ');
    let narray = new Array();
    for(var i = 0; i < arraySplit.length; i++){
        narray[i] = arraySplit[i] + ' ' + arraySplit[i]
    }
    return narray.join(' ');
}
with(document){
    write('hello')
}