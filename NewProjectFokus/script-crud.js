// encontrar o botão adicionar tarefa

const btnAdicionarTarefa = document.querySelector('.app__button--add-task')/*bt de adicionar tarefa */
const formAdicionarTarefa = document.querySelector('.app__form-add-task') /*formulário adicionar tarefa*/
const textArea = document.querySelector('.app__form-textarea') /*interagir com o que o usuário digitou */
const ulTarefas = document.querySelector('.app__section-task-list')

const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [] // Esta é a nossa lista (ou array) de tarefas. Ela começa vazia porque ainda não adicionamos nenhuma tarefa.

//Para criar a função, digitamos function seguido do nome da função criarElementoTarefa(). Entre os parênteses, podemos receber tarefa como parâmetro, pois precisamos saber qual tarefa queremos criar.
function criarElementoTarefa(tarefa){ /*recebe tarefa e devolve html*/
    const li = document.createElement('li') /*criar elemento de lista */
    li.classList.add('app__section-task-list-item')/*acessar a  lista que acabou de criar */
    const svg = document.createElement('svg') /*adicinar class CSS */
    svg.innerHTML = ` 
     <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
    <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
    </svg>
    
    `
    const paragrafo = document.createElement('p')
    paragrafo.textContent = tarefa.descricao // receber as informações digitadas 
    paragrafo.classList.add('app_section-task-list-item-description')

    const botao = document.createElement('button')
    botao.classList.add('app_button-edit')

    const imagemBotao = document.createElement('img')
    
    imagemBotao.setAttribute('src','./imagenscopy/edit.png'  )// definir pra onde a imagem aponta 

    botao.append(imagemBotao)//coloca ai dentro (imagem ) Ele pode aceitar vários argumentos e adicionar cada um deles como um filho do elemento ao qual o método é aplicado
    
    li.append(svg)
    li.append(paragrafo)
    li.append(botao)

    return li

}

/* addEventListener: com finalidade de permitir que responda a eventos específicos (cliques de mouse, pressionamentos de tecla, carregamento da página, etc*/
//addEventListener: Quando o botão for clicado, esta função será executada.
btnAdicionarTarefa.addEventListener('click', () => {/*addeventlistener capturar evento de click no botão 1º quero ouvir , 2º o que quer executar  */
    formAdicionarTarefa.classList.toggle('hidden')/* Toggle"alterna seu estilo de exibição entre "none" e "block".resulta em mostrar ou ocultar o elemento*/ 
})

 //// Esse evento ocorre quando tentamos enviar o formulário (geralmente, apertando o botão 'Enter' ou clicando em um botão de submit).
formAdicionarTarefa.addEventListener('submit', (evento) => {/*quando alguem digitar e interagir */
    evento.preventDefault(); /* preventdefault: impedir que a pagina regarregue quando digita algo na caixa add nova tarefa*/   
    const tarefa = { //identifica a tarefa que esta cadastrando no momento na textearea
        descricao: textArea.value /*valor digitado textarea e guardar dentro de um object */
    }
    tarefas.push(tarefa)/*colocar dentro array as tarefa lista com todas as tarefas  sendo geridas pelo fokus*/
    const elementoTarefa =criarElementoTarefa(tarefa)
    ulTarefas.append(elementoTarefa)
    localStorage.setItem('tarefas', JSON.stringify(tarefas))//Convertendo o array para uma string em formato JSON para poder armazenar. 
    textArea.value = ''
    formAdicionarTarefa.classList.add('hidden')
})
tarefas.forEach(tarefa =>{
    const elementoTarefa = criarElementoTarefa(tarefa)
    ulTarefas.append(elementoTarefa)
});






/*<li class="app_section-task-list-item">
    <svg>
        <svg class="app_section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
            <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
        </svg>
    </svg>
    <p class="app_section-task-list-item-description">
        Estudando localStorage
    </p>
    <button class="app_button-edit">
        <img src="/imagens/edit.png">
    </button>
  </li>
`;




const adicionarTarefa = document.querySelector('.')

*/