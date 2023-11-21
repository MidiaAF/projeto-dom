const html = document.querySelector('html')
const focoBT = document.querySelector ('.app__card-button--foco')
const curtoBT = document.querySelector ('.app__card-button--curto')
const longoBT = document.querySelector ('.app__card-button--longo')
const banner = document.querySelector ( '.app__image')
const titulo = document.querySelector('.app__title')
const botoes = document.querySelectorAll('.app__card-button')
const musicaFocoInput = document.querySelector('#alternar-musica')


/*Essencialmente, este código está manipulando a aparência ou o comportamento da página quando os botões específicos são clicados, alterando dinamicamente o valor de um atributo no elemento HTML principal.*/

    focoBT.addEventListener('click', () => {/*focoBT. Quando esse botão é clicado, a função dentro do bloco de código é executada.  */   
        alterarContexto('foco')
        focoBT.classList.add('active')/*adicionando a class "active"*/
})

    curtoBT.addEventListener('click', () => { /*Crie uma função chamada "Alterar Contexto" para automatizar a mudança de imagens, cores de fundo dos elementos e textos;*/
        alterarContexto('descanso-curto')
        curtoBT.classList.add('active')
})

    longoBT.addEventListener('click', () => {
    alterarContexto('descanso-longo')
    longoBT.classList.add('active')

})

/* Ou ====  html.setAttribute('data-contexto', 'foco')  setAt .. Esse atributo pode ser usado para modificar a aparência ou o comportamento da página com base no contexto definido.
    banner.setAttribute('src', './imagens/foco.png' )/*mudar a imagem quando clicar no buttom*/

    
    /*ClassList fornece métodos que facilitam a adição, remoção e verificação de classes, tornando a manipulação de classes CSS mais eficiente e menos suscetível a erros de programação.*/
    function alterarContexto(contexto){
        botoes.forEach(function (contexto){
            contexto.classList.remove('active')

        })

    html.setAttribute('data-contexto', contexto) /*setAttribute() Adiciona um novo atributo ou modifica o valor de um atributo existente num elemento específico.*/
    banner.setAttribute('src', `imagens/${contexto}.png`)/* mudando a imagem */
    switch (contexto) { /* mudando o texto quando clicar , "innerHTML" para alterar o texto exibido na tela de acordo com o contexto selecionado */
        case 'foco':
            titulo.innerHTML = `
            Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>
        `            
            break;
            case 'descanso-curto':
            titulo.innerHTML = `
            Que tal dar uma respirada?<br>
            <strong class="app__title-strong">Faça uma pausa curta!</strong>` 

            break;
            case 'descanso-longo':
            titulo.innerHTML = `
            Hora de voltar a superfície?<br>
            <strong class="app__title-strong">Faça uma pausa longa!</strong>`
    
        default:
            break;
    }
}
