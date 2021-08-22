// Realização do passo a passo, do Livro digital, de como iniciar um projeto.

// 1 - declarando variáveis e a quantidade da array(lista de alunos):

let listaDeEstudantes = ["Helena", "Chico", "Mário"]
let quantidadeDeEstudantes = listaDeEstudantes.length
let inicio = 0
console.log(quantidadeDeEstudantes)

// 2 - usando laço de repetição for:

for (let index = 0; index < quantidadeDeEstudantes; index++) {
    const alunoCorrente = listaDeEstudantes[index];
    console.log(alunoCorrente)
}

// 3 - usando o do/while:

do{
    console.log(listaDeEstudantes[inicio])
    inicio++
} while (inicio < quantidadeDeEstudantes)

// 4 - usando somente while:

while (inicio < quantidadeDeEstudantes){
    console.log(listaDeEstudantes[inicio])
    inicio++
}

// 5 - usando laço for para fazer uma contagem:

for (let numero = 1; numero <= 10; numero++){
    console.log(numero);
}

// 6 - inserindo um novo aluno na lista:

listaDeEstudantes.push("José")
console.log(listaDeEstudantes)

// 7 - usando condição if para inserir um novo aluno da lista sabendo se ainda é possível adicionar ou não:
if (quantidadeDeEstudantes < 5){
    listaDeEstudantes.push ("José")
    console.log(listaDeEstudantes) 
}

// 8 - aumentando a quantidade de alunos na lista e acrescentando o else na condição que limita quatidade de alunos na lista:
let listaDeEstudantes1 = ["Helena", "Chico", "Mário", "José", "Maria"]
let quantidadeDeEstudantes1 = listaDeEstudantes1.length

if (quantidadeDeEstudantes1 < 5){
    listaDeEstudantes1.push ("João")
    console.log(listaDeEstudantes1)
} else {
    console.log("\n Não é possível inserir mais alunos nessa turma! \n") //uso de \n para pular linha.
}



