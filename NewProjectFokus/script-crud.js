// encontrar o botão adicionar tarefa

const btnAdicionarTarefa = document.querySelector('.app__button--add-task')/*bt de adicionar tarefa */
const formAdicionarTarefa = document.querySelector('.app__form-add-task') /*formulário adicionar tarefa*/
const textArea = document.querySelector('.app__form-textarea') /*interagir com o que o usuário digitou */
const ulTarefas = document.querySelector('.app__section-task-list')

const listasDeTarefas = JSON.parse(localStorage.getItem('tarefas')) || [] // Esta é a nossa lista (ou array) de tarefas. Ela começa vazia porque ainda não adicionamos nenhuma tarefa.

function atualizarTarefas (){
    localStorage.setItem('tarefas', JSON.stringify(listasDeTarefas)) //Convertendo o array para uma string em formato JSON para poder armazenar. 
}

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
    ///* trasnformando HTML em tarefas*/
    const paragrafo = document.createElement('p') 
    paragrafo.textContent = tarefa.descricao //* receber as informações digitadas */
    paragrafo.classList.add('app_section-task-list-item-description')

    const botao = document.createElement('button')
    botao.classList.add('app_button-edit')

    botao.onclick = () =>{ //* o que foi digitado em lista de tarefas,pode ser sobrescrito na nova descrição */
        console.log('Nova descrição da tarefa: ' , novaDescricao  )
       const novaDescricao =  prompt("Qual é o novo nome da tarefa? ") // a nova descrição do prompt  
        paragrafo.textContent = novaDescricao //atualização da referencia da tarefa a nova camada de dados
        tarefa.descricao = novaDescricao
        atualizarTarefas() //update da localStorage
    }

    const imagemBotao = document.createElement('img')
    
    imagemBotao.setAttribute('src','./imagenscopy/edit.png'  )// **definir pra onde a imagem aponta */

    botao.append(imagemBotao)//*coloca ai dentro (imagem ) Ele pode aceitar vários argumentos e adicionar cada um deles como um filho do elemento ao qual o método é aplicado*/    
    li.append(svg)
    li.append(paragrafo)
    li.append(botao)

    return li //* criar elemento e retorna  linha foreach*/
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
    listasDeTarefas.push(tarefa)/*colocar dentro array as tarefa lista com todas as tarefas  sendo geridas pelo fokus*/
        const elementoTarefa = criarElementoTarefa(tarefa)
        ulTarefas.append(elementoTarefa)
        atualizarTarefas()
        textArea.value = ''// limpar textarea 
        formAdicionarTarefa.classList.add('hidden') // esconder o formulário 
})
    listasDeTarefas.forEach(tarefa => { // para cada tarefa percorrida, chamar a função criar elemento da tarefa
        const elementoTarefa = criarElementoTarefa(tarefa)
        ulTarefas.append(elementoTarefa) // ul index html
});





