function criarCartao(categoria,pergunta,resposta){
    let container = document.getElementById('container')
    let article = document.createElement('article')
    article.className = 'cartao'
    article.innerHTML = `
    <div class="cartao-conteudo">
        <h3> ${categoria}</h3>
    <div class="cartao-conteudo-pergunta"</div>
        <p> ${pergunta} </p>> 
    <div class="cartao-conteudo-resposta">
        <p> ${resposta} </p>
    </div>
    </div>
    `
    container.appendChild(article)
}

criarCartao('Biologia','Qual a funçao da mitocondria','Produçao de energia')
criarCartao('Matematica','Como e definido um grupo?','É um conjunto unido de uma operação onde esta é fechada no conjunto e tem algumas prioridades')
criarCartao("Geral","Qual a funçao do ronaldo gaucho",'fazer gols')





























