function idade(idade){
    if (idade<0){
        return "Não pode número negativo!!"
    }
    return idade*365
}
console.log(idade(17))