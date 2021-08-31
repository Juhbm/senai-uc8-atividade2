let dataEvento = 20210905;
let idade = 20;
let listaParticipantes = ['Juliana', 'Vanessa', 'Nathaly', 'Danielle', 'Mayara', 'Joelma', 'Oberdan', 'Messias', 'Matheus', 'Maicon', 'Francisco', 'Leandro'];
let listaPalestrantes = ['Odirlei', 'Thiago', 'Raoni']
let total = listaParticipantes.length + listaPalestrantes.length

if (dataEvento > 20210905){
    console.log("Inscrição não permitida! Data inválida. Tente novamente!")
} else {
    console.log('Inscrição permitida.')
}

if (idade >= 18) {
    console.log("Maior de 18 anos. Permitir cadastro.")
} else {
    console.log("Menor de 18 anos!!! Não permitido.")
}

console.log(' ===== LISTA DE PARTICIPANTES ==== \n', listaParticipantes, ' ==== LISTA DE PALESTRANTES ==== \n', listaPalestrantes)
console.log(' TOTAL: ', total)

if (listaParticipantes.length + listaPalestrantes.length < 100 ) {
    console.log("Cadastro permitido.")   
} else {
    console.log("Capacidade excedida!")
}