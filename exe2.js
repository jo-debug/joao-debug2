function funcao(){
    var vet = []
    for(var i=0; i<5; i++){
        var objeto = {}
        //coloca os dados no objeto
        objeto.salario = Number(prompt("salario"))
        objeto.idade = Number(prompt("idade"))
        objeto.filhos = Number(prompt("filhos"))
        objeto.sexo = Number(prompt("sexo"))
        //coloca o objeto no vetor
        vet.push(objeto)
    }
      //a media do salario da população
    }
    var somaSalario = 0
    var somaFilhos = 0
    var maiorSalario = vet [0].salario
    var qtde = 0;
    for(var i=0; i<vet.length; i++){
        somaSalario = somaSalario + vet[i].salario
        somaFilhos = somaFilhos + vet[i].filhos
        if (vet [i].salario > maiorSalario  )
        maiorSalario = vet [i].salario
 }
        
        if ((vet[i].sexo == 'F') && (vet[i].salario > 1000))
        qtde++;
}
}
 alert("Média salarial" + somasalario/vet.length)
 alert("Média de filhos" + somafilhos/vet.length)
 alert("Média salario" + maiorSalario)
 alert("Percentural" + qtde/3*100);
}