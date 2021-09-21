exibirImparPar(10);
function exibirImparPar(limite) {
    for (var i = 0; i <= limite; i++) {
        if (i % 2 === 0)
        console.log(i,"PAR - Classificado!");
        else
        console.log(i,"IMPAR - Desclassificado!");
    }
}