

   var nome, nota01, nota02, media;
   nome = prompt("Digite o nome do aluno: ")
   nota01 = prompt("Digite a nota 01 do aluno: ")
   nota02 = prompt("Digite a nota 02 do aluno: ")

   media = (parseInt(nota01) + parseInt(nota02)) / 2

   if(media >= 5){
        alert(nome + " Aprovado!")
   }
    else
        alert(nome + " Repovado!")