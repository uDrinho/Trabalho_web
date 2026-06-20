#  Poções e Soluções - Web Service

Atividade Prática 2 da disciplina SCC0219 - Introdução ao Desenvolvimento Web. 
Este projeto consiste em um Web Service (API REST) e uma interface frontend interativa para a loja de poções de Annabelle Merigold.

##  Estrutura do Projeto

O projeto utiliza um padrão de repositório dividido entre cliente e servidor:

```
Trabalho_web/
├── .gitignore                    # Ignora node_modules e arquivos desnecessários
├── README.MD                     # Documentação principal e instruções de uso
│
├── backend/
│   ├── package.json              # Dependências e scripts do servidor
│   └── src/
│       ├── config/
│       │   ├── database.js       # Configuração do SQLite (:memory:)
│       │   └── seed.js           # Dados iniciais populados no banco
│       ├── controllers/
│       │   └── potionController.js # Lógica de negócio 
│       ├── models/
│       │   └── Potion.js         # Definição do esquema
│       ├── routes/
│       │   └── potionRoutes.js   # Definição de rotas da API
│       └── server.js             # Ponto de entrada do Express
│
└── frontend/
    ├── admin.html                # Painel de controle e formulário
    ├── index.html                # Vitrine e história da loja
    ├── assets/
    │   └── images/
    │       └── beco.png          # Imagem local do Beco da Última Saída
    ├── css/
    │   ├── admin.css             
    │   ├── global.css            # Variáveis CSS e estilos base
    │   └── vitrine.css           
    └── js/
        ├── admin.js              # Lógica de integração (POST/DELETE)
        └── vitrine.js            # Lógica de integração (GET)
```

## Como Executar

### 1. Iniciando o Backend
Abra uma janela do seu emulador de terminal, navegue até a pasta do backend e instale as dependências:

```
cd backend
npm install
npm start
```
*O servidor estará rodando na porta 3000 (ex: http://localhost:3000).* O banco de dados em memória do SQLite será inicializado automaticamente com o catálogo base de poções.

### 2. Acessando o Frontend
Como o projeto utiliza arquivos estáticos puros para o frontend, não há necessidade de um processo de build. Para evitar problemas com políticas de CORS ao fazer o fetch localmente, sirva a pasta `frontend` através de um servidor HTTP simples. 

Se estiver utilizando Python, abra uma nova aba do terminal e execute:

```
cd frontend
python3 -m http.server 8000
```
Agora, acesse em seu navegador:
- **Vitrine da Loja:** `http://localhost:8000/index.html`
- **Painel de Administração:** `http://localhost:8000/admin.html`

## Tecnologias Utilizadas
- **Frontend:** HTML, CSS, JavaScript (Vanilla).
- **Backend:** Node.js, Express, Sequelize.
- **Banco de Dados:** SQLite (Memory Mode).
