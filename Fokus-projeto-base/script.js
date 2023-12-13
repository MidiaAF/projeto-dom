const html = document.querySelector('html')
const focoBT = document.querySelector ('.app__card-button--foco')
const curtoBT = document.querySelector ('.app__card-button--curto')
const longoBT = document.querySelector ('.app__card-button--longo')
const banner = document.querySelector ( '.app__image')
const titulo = document.querySelector('.app__title')
const botoes = document.querySelectorAll('.app__card-button')
const musicaFocoInput = document.querySelector('#alternar-musica')
const musica = new Audio('sons/luna-rise-part-one.mp3')/*musicas em JS ou readFile()*/
musica.loop = true /*para a musica ficar tocando sem parar*/
const startPauseBt = document.querySelector('#start-pause')
const audioPlay = new Audio('sons/play.wav')
const audioPause = new Audio('sons/pause.mp3')
const audioTempoFinalizado = new Audio('sons/beep.mp3')
const iniciarOuPausarBt = document.querySelector('#start-pause span')
const tempoNaTela = document.querySelector('#timer')

let tempoDecorridoEmSegundos = 1500  /*25min*/
let intervaloID = null


musicaFocoInput.addEventListener('change', () => { /*change input que usa mais para checkbox*/
    if(musica.paused) {
        musica.play()
    } else {
        musica.pause()
    }
})


/*Essencialmente, este código está manipulando a aparência ou o comportamento da página quando os botões específicos são clicados, alterando dinamicamente o valor de um atributo no elemento HTML principal.*/

    focoBT.addEventListener('click', () => {/*focoBT. Quando esse botão é clicado, a função dentro do bloco de código é executada.escutar a interação com a pagina */   
        tempoDecorridoEmSegundos = 1500/*tempo de cada descanso 25m*/        
        alterarContexto('foco')
        focoBT.classList.add('active')/*adicionando a class "active"*/
})

    curtoBT.addEventListener('click', () => { /*Crie uma função chamada "Alterar Contexto" para automatizar a mudança de imagens, cores de fundo dos elementos e textos;*/
        tempoDecorridoEmSegundos = 300 /*tempo de cada descanso 5m*/
        alterarContexto('descanso-curto')
        curtoBT.classList.add('active')/*class para mudar a classes e estilo dos botões */
})

    longoBT.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 900 /*tempo de cada descanso 15m*/
    alterarContexto('descanso-longo')
    longoBT.classList.add('active')

})

/* Ou ====  html.setAttribute('data-contexto', 'foco')  setAt .. Esse atributo pode ser usado para modificar a aparência ou o comportamento da página com base no contexto definido.
    banner.setAttribute('src', './imagens/foco.png' )/*mudar a imagem quando clicar no buttom*/

    
    /*ClassList fornece métodos que facilitam a adição, remoção e verificação de classes, tornando a manipulação de classes CSS mais eficiente e menos suscetível a erros de programação.*/
    function alterarContexto(contexto){
        mostrarTempo()/*aparecendo cada tempo no área de descanso correspondente*/
        botoes.forEach(function (contexto){
            contexto.classList.remove('active')/* remover a marcação de todos os botões quando acionado ( foco, Descanso ...)*/

        })

    html.setAttribute('data-contexto', contexto) /*setAttribute() Adiciona um novo atributo ou modifica o valor de um atributo existente num elemento específico.*/
    banner.setAttribute('src', `imagens/${contexto}.png`)/* mudando o caminho das imagens */
    switch (contexto) { 
        case 'foco': /* mudando o texto quando clicar , "innerHTML" para alterar o texto exibido na tela de acordo com o contexto selecionado */
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

const contagemRegressiva = () => { /*criar funcão dentro de uma constante para colocar um cronometro*/   
    if(tempoDecorridoEmSegundos <=0){/*quando chegar em 0 parar o temporizador*/
     audioTempoFinalizado.play() /*tocar musica quando acabar*/      
        alert('Tempo finalizado!')
        zerar() /*ela torna o intervalo ID null, depois que o alert aparecer na tela*/
        return
    }

    tempoDecorridoEmSegundos -= 1
    mostrarTempo()
   
} 

startPauseBt.addEventListener('click', iniciarOuPausar)

function iniciarOuPausar() {
    if(intervaloID){ /*pausar o temporizador*/
    audioPause.play();/*tocar musica quando pausa*/
        zerar()
        return
    }
    audioPlay.play();
     intervaloID = setInterval (contagemRegressiva,1000) /*SetInterval = 1 parametro: qual metodo sera excecutado 2º por quanto tempo será executado*/
     iniciarOuPausarBt.textContent = "Pausar"/*colocar nome Pausar quando iniciar o contador*/
}

function zerar(){ /*vai interromper a excecução de algum codigo, pra não fazer numero negativos, zerar o temporizador*/
    clearInterval(intervaloID) /*clearInterval para interromper a execução do código;*/
    iniciarOuPausarBt.textContent = "Começar" /*colocar palavra começar depois de iniciado a contagem*/
    intervaloID = null
}

function mostrarTempo() {
    const tempo = new Date(tempoDecorridoEmSegundos * 1000)
    const tempoFormatado = tempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second:'2-digit'}) /*toLocaleTimeString é usada para obter de string da hora de um objeto Data, formatada de acordo com as configurações de localidade (locale) e opções fornecidas.*/
   tempoNaTela.innerHTML = `${tempoFormatado}`
}

mostrarTempo() /*deixar fixo o tempo na tela*/// Em qualquer lugar que você queira chamar a função mostrarTempo(), como no final do script


/* como colocar relogio hora/min/segundos  *****EXEMPLO***
const dataAtual = new Date();

const opcoes = {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  timeZoneName: 'short'
};

const formatoLocalizado = dataAtual.toLocaleTimeString('pt-BR', opcoes);

console.log(formatoLocalizado);

*/