
//console.log(document.querySelector('.btn-mostrar-projetos'));

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');

const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

//console.log(botaoMostrarProjetos)

//pásso 2 - identificar o clique no botão
botaoMostrarProjetos.addEventListener('click', () => {
    
    //passo 3 - adicionar a classe ativo nos projetos escondidos (*refatorado*)
    mostrarMaisProjetos();
    //Passo 1 - pegar o botão e esconder ele
    esconderBotao();

    /*passo 3 - adicionar a classe ativo nos projetos escondidos (n refatorado)
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });*/

    // objetivo 2 - esconder o btn mostrarMais
    //Passo 1 - pegar o botão e esconder ele
    //botaoMostrarProjetos.classList.add("remover"); < versão n refatorada
        
});

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}
