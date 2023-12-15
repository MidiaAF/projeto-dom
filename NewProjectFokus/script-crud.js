// encontrar o botão adicionar tarefa

const btnAdicionarTarefa = document.querySelector('.app__button--add-task')/*bt de adicionar tarefa */
const formAdicionarTarefa = document.querySelector('.app__form-add-task') /*formulário adicionar tarefa*/
const textArea = document.querySelector('.app__form-textarea') /*interagir com o que o usuário digitou */

/* addEventListener: com finalidade de permitir que responda a eventos específicos (cliques de mouse, pressionamentos de tecla, carregamento da página, etc*/
btnAdicionarTarefa.addEventListener('click', () => {/*addeventlistener capturar evento de click no botão 1º quero ouvir , 2º o que quer executar  */
    formAdicionarTarefa.classList.toggle('hidden')/* Toggle"alterna seu estilo de exibição entre "none" e "block".resulta em mostrar ou ocultar o elemento*/ 
})

formAdicionarTarefa.addEventListener('submit', () => {
    evento.preventDefault();
})

