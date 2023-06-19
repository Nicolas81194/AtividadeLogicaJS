function midia(a){
    if (a.length<2){
        return "Ai não papae"
    }
    var maior = Math.max(a[0], a[1])
    var segundo = Math.min(a[0], a[1])
    for (var i = 0; i < a.length; i++) {
        if (a[i] > maior){
            segundo = maior
            maior = a[i]
        }
        else if (a[i] > segundo) {
            segundo = a[i]
    }
}
return segundo;
}
console.log(midia([1,2,3,4,5,6,7,100000,1514,151451,2342,12512,6,72572,7252]))