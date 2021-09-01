// declaração das variáveis.

let dataInsc = 2021.0905
let dataEvento = 2021.0905 // data inserida anomêsdia(AAAAMMDD) para ser processada adequadamente na condição if sem precisar de recurso new date.
let dataNasc = 2002.0905 // (O '.' (AAAA.MMDD) após o ano é para emitir a idade com 2 dígitos.)
let idadeMin18 = 18.0000;
let idade = dataEvento - dataNasc;
let listaParticipantes = ['Juliana', 'Vanessa', 'Nathaly', 'Danielle', 'Mayara', 'Joelma', 'Oberdan', 'Messias', 'Matheus', 'Maicon', 'Francisco', 'Leandro'];
let listaPalestrantes = ['Odirlei', 'Thiago', 'Raoni']
let total = listaParticipantes.length + listaPalestrantes.length //soma total de participantes e palestrantes.

console.log("\n |======= CADASTRO DE EVENTO =======| \n")
console.log(" Esse cadastro é bem rapidinho, precisamos de pequenas informações.\n")
console.log(" Por favor, digite a data que deseja participar do Evento (AAAA.MMDD): ", dataInsc)

// estrutura condicional para permitir cadastro no evento:

if (dataInsc <= dataEvento){
    console.log('\n Inscrição permitida! Vamos prosseguir...')
    console.log('\n... agora digite sua Data de Nascimento (AAAA.MMDD): ', dataNasc)

    if (dataNasc <= dataEvento){
        console.log('\n Sua idade é: ', idade.toFixed(0), ' anos.') // uso do tofixed para fixar casas decimais, no caso = 0.
    }
        if (idade >= idadeMin18){
            console.log("\n Perfeito, você é Maior de 18 anos! Verificando a capacidade de pessoas permitida neste Evento...")

            // apresentação dos participantes e palestrantes no terminal e o total deles

            console.log('\n ===== LISTA DE PARTICIPANTES ==== \n\n', listaParticipantes, '\n ==== LISTA DE PALESTRANTES ==== \n\n', listaPalestrantes)
            console.log('\n LIMITE MÁX. PERMITIDO: 100 PESSOAS.\n')
            console.log(' TOTAL DE INSCRITOS ATÉ O MOMENTO: ', total, '\n')

            // junção das listas para validar a condição de quantidade de pessoas do evento

            if (listaParticipantes.length + listaPalestrantes.length < 100 ) {
                console.log(" Parabéns! Você poderá participar do Evento. Estamos finalizando sua inscrição... \n")
            } 
                // condições else que impedem o cadastro:

                else {
                console.log(" Desculpe, capacidade excedida! Agradecemos seu interesse e aguardamos sua inscrição para o próximo Evento.\n")
            }

        } else{
            console.log("\n Ahh... você é Menor de 18 anos! Cadastro não permitido. Não fique triste! Ao fazer 18 anos, poderá participar.\n")
        }
        
} else {
    console.log("\n Inscrição não permitida! Data inválida. Tente novamente! A data limite para sua inscrição é: \n", dataEvento)
}