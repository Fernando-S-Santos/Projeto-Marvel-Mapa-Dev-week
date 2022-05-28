const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        const idselecionado = personagem.attributes.id.value;

        if(idselecionado === 'ultron') return;

/*
    OBJETIVO 1 - quando passar o mouse em cima do personagem temos que:

    - colocar a classe selecionado no personagem que passamos o mouse em cima para adicionar a animação nele

    - retirar a classe selecionado do personagem que está selecionado
 */
        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')
        
        personagem.classList.add('selecionado')

/*
    OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem e nome do personagem grande
    - alterar a imagem do jogador 1
    - alterar o nome do jogador 1
*/
        
        const imagemjogador1 = document.getElementById('personagem-jogador-1');
        imagemjogador1.src = `./src/imagens/${idselecionado}.png`;

        const nomejogador1 = document.getElementById('nome-jogador-1');
        
        const nomeselecionado = personagem.getAttribute('data-name');
        console.log('nomeselecionado', nomeselecionado);

        nomejogador1.innerHTML = nomeselecionado;
    });
});




