function midia(a){
    let alunoMidia = null;
    let mediaMidia = 0;
    for (const aluno in a) {
       const notas = a[aluno];
       const media = notas.reduce((total,nota) => total + nota, 0)/notas.lenght;
       if (media > mediaMidia){
        alunoMidia = aluno;
        mediaMidia = media;
       }
}

return {nome: alunoMidia, media: mediaMidia}
}
const liga = midia({
    AugustoSzymanski:[0,0,0,0,0,0],
    GabrielBarroso:[1,5,2,4,1,1],
    LeandroY:[10,1,8,2,1,5],
    NicolasCria:[1,2,10,10,10,0]
})

console.log(liga)
