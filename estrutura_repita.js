/*
Var
// Seção de Declarações das variáveis 
   sairLoop: caractere
   valor01, valor02: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   repita
         escreva("Digite o primeiro valor: ")
         leia(valor01)
         escreva("Digite o segundo valor: ")
         leia(valor02)
         escreval("Resultado: ", valor01 + valor02)
         escreval("Dseja sair? s/n")
         leia(sairLoop)
   ate sairLoop <> "N"
*/

function acaoBotao(){
    var sairLoop, valor01, valor02
    do {
        valor01 = prompt("Digite o primeiro valor: ")
        valor02 = prompt("Digite o segundo valor: ")
        document.getElementById("paragrafo").innerText = "Resultado: " + (parseInt(valor01) + parseInt(valor02))
        sairLoop = prompt("Dseja sair? s/n")
    } while (sairLoop == "N")
}
