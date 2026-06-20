import { Router } from 'express';
import { buscarTodasPocoes, criarPocao, removerPocao } from '../controllers/potionController.js';

const roteador = Router();

roteador.get('/', buscarTodasPocoes);
roteador.post('/', criarPocao);
roteador.delete('/:id', removerPocao);

export default roteador;
