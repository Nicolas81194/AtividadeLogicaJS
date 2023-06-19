function repetir(a, b) {
    var array = []
    for (let i = 0; i < b; i++){
        array.push(a)
    }
    return array
}
console.log(repetir('facil', 1000000))