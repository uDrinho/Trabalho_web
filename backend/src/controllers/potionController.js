import Pocao from '../models/Potion.js';

export async function buscarTodasPocoes(req, res) {
  try {
    const pocoes = await Pocao.findAll();
    return res.status(200).json(pocoes);
  } catch (erro) {
    return res.status(500).json({ erro: 'Erro ao buscar poções.' });
  }
}

export async function criarPocao(req, res) {
  try {
    const { nome, descricao, imagem, preco } = req.body;
    const pocao = await Pocao.create({ nome, descricao, imagem, preco });
    return res.status(201).json(pocao);
  } catch (erro) {
    return res.status(500).json({ erro: 'Erro ao criar poção.' });
  }
}

export async function removerPocao(req, res) {
  try {
    const { id } = req.params;
    const removido = await Pocao.destroy({ where: { id } });

    if (removido) {
      return res.status(200).json({ mensagem: 'Poção deletada com sucesso.' });
    }

    return res.status(404).json({ erro: 'Poção não encontrada.' });
  } catch (erro) {
    return res.status(500).json({ erro: 'Erro ao deletar poção.' });
  }
}
