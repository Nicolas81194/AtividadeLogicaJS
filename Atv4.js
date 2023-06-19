function inverso(isso) {
    if (typeof (isso) == 'boolean') {
        if (isso == false) {
            return true;
        }
        return false;
    }

    else if (typeof (isso) == 'number') {
        isso = isso * (-1)
        return isso
    }
    else{
        return "“Booelano ou Número esperados, mas o parâmetro é do tipo "+typeof(isso)
    }

}
console.log(inverso("Não foi"))