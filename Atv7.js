function filtro(a) {
    var array = [];
    for (var i = 0; i < a.length; i++) {
    if (typeof (a[i]) == 'number') {
        array.push(a[i])
    }
}
return array;
}
console.log(JSON.stringify(filtro([1, 'lele', 3])))