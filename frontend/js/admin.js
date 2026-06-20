const URL_API = 'http://localhost:3000/api/pocoes';

async function buscarPocoes() {
  const lista = document.getElementById('lista-pocoes');

  try {
    const resposta = await fetch(URL_API);
    const pocoes = await resposta.json();

    lista.innerHTML = pocoes.map(pocao => `
      <div class="linha-pocao">
        <img src="${pocao.imagem}" alt="${pocao.nome}">
        <div class="info-pocao">
          <span class="nome-pocao">${pocao.nome}</span>
          <span class="preco-pocao">R$ ${pocao.preco}</span>
        </div>
        <button class="btn-remover" onclick="removerPocao(${pocao.id})">Remover</button>
      </div>
    `).join('');
  } catch (erro) {
    lista.innerHTML = '<p>Erro ao carregar poções.</p>';
  }
}

document.getElementById('form-pocao').addEventListener('submit', async (e) => {
  e.preventDefault();

  const nome = document.getElementById('input-nome').value;
  const descricao = document.getElementById('input-descricao').value;
  const imagem = document.getElementById('input-imagem').value;
  const preco = Number(document.getElementById('input-preco').value);

  try {
    await fetch(URL_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, descricao, imagem, preco }),
    });

    document.getElementById('form-pocao').reset();
    buscarPocoes();
  } catch (erro) {
    alert('Erro ao cadastrar poção.');
  }
});

async function removerPocao(id) {
  try {
    await fetch(`${URL_API}/${id}`, { method: 'DELETE' });
    buscarPocoes();
  } catch (erro) {
    alert('Erro ao remover poção.');
  }
}

buscarPocoes();
