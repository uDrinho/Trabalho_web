import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Pocao = sequelize.define('Pocao', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  imagem: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  preco: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Pocao;
