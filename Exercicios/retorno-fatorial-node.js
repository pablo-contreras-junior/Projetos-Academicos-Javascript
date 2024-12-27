function fator(n){
    var fat = 1;
    while (n > 1){
        fat *= n
        n--
    }
    return fat;
}

console.log(fator(7));