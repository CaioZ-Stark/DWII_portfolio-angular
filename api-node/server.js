const express = require('express');
const cors = require('cors');

const app = express();
const PORTA = 3000;

app.use(cors());
app.use(express.json());

const projetos = [
    {
        id: 1,
        nome: 'Portfolio Pessoal',
        descricao: 'Site de portfolio responsivo com PHP, PDO e MariaDB, painel admin e login.',
        tecnologias: 'Angular, Angular Material, TypeScript, PHP, SQL, CSS, Git',
        link_github: 'https://github.com/CaioZ-Stark/DWII_portfolio-angular',
        ano: 2026
    },
    {
        id: 2,
        nome: 'Sistema de Biblioteca',
        descricao: 'CRUD de acervo e emprestimos, com busca e relatorios.',
        tecnologias: 'PHP, MariaDB, Bootstrap',
        link_github: null,
        ano: 2025
    },
    {
        id: 3,
        nome: 'App de Tarefas',
        descricao: 'Lista de tarefas com categorias, prazos e filtro por status.',
        tecnologias: 'JavaScript, HTML, CSS',
        link_github: null,
        ano: 2025
    }
];

const login = [
    {
        id: 1,
        usuario: 'admin',
        senha: '1234'
    }
];

app.get('/', (req, res) => {
    res.send('API do Portfolio em Node: no ar');
});

app.get('/api/projetos', (req, res) => {
    res.json(projetos);
});

app.post('/api/login', (req, res) => {
    const { usuario, senha } = req.body;

    const encontrado = login.find(
        (item) => item.usuario === usuario && item.senha === senha
    );

    if (encontrado) {
        return res.json({
            sucesso: true,
            mensagem: 'Login realizado com sucesso',
            usuario: encontrado.usuario
        });
    }

    return res.status(401).json({
        sucesso: false,
        mensagem: 'Usuário ou senha inválidos',
        usuario: ''
    });
});

app.listen(PORTA, () => {
    console.log('API no ar em http://localhost:' + PORTA);
});
