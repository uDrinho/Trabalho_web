import express from 'express';
import cors from 'cors';
import sequelize from './config/database.js';
import popularBanco from './config/seed.js';
import rotasPocoes from './routes/potionRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/pocoes', rotasPocoes);

sequelize.sync().then(async () => {
  await popularBanco();

  app.listen(3000, () => {
    console.log('🧪 Servidor rodando em http://localhost:3000');
  });
});
