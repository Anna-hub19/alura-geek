import listaProdutos from './conectaApi';
const div = document.querySelector('.divpai');

div.innerHTML = `<div class="div-produtos">
<img src="${listaProdutos.imagem}" alt="imagem produto">
<p class="paragrafo-produtos">${nome}</p>
<div class="div-preco">
    <h3>$ ${valor}</h3>
    <img src="./imagem/lixo.png" alt="">
</div>
</div>`