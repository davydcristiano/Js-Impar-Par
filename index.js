exibirImparPar(5);
function exibirImparPar(limite) {
    for (var i = 0; i <= limite; i++) {
        if (i % 2 === 0 && i != 0)
        console.log(i,"PAR - Classificado!");
        else if (i % 2 === 1)
        console.log(i,"IMPAR - Desclassificado!");
        else
        console.log("número é igual á 0");
    }
}
