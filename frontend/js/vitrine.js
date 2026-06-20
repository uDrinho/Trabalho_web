const URL_API = 'http://localhost:3000/api/pocoes';

async function buscarERenderizarPocoes() {
  const grade = document.getElementById('grade-pocoes');

  try {
    const resposta = await fetch(URL_API);
    const pocoes = await resposta.json();

    grade.innerHTML = pocoes.map(pocao => `
      <div class="card-pocao">
        <img src="${pocao.imagem}" alt="${pocao.nome}">
        <div class="card-pocao-corpo">
          <h3>${pocao.nome}</h3>
          <p>${pocao.descricao}</p>
          <span class="card-preco">${pocao.preco} moedas</span>
        </div>
        <button class="btn-comprar" onclick="alert('Funcionalidade de compra em desenvolvimento!')">Comprar</button>
      </div>
    `).join('');
  } catch (erro) {
    grade.innerHTML = '<p>Erro ao carregar o catálogo de poções.</p>';
  }
}

buscarERenderizarPocoes();
