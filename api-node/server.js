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
const tecnologias = [
    {   
        id:1,
        nome:'HTML',
        categoria:'Frontend',
        descricao:'Linguagem de marcacao para estrutura de paginas.',
        ano_criacao: 1993,
    },{
        id:2,
        nome:'CSS',
        categoria:'Frontend',
        descricao:'Linguagem de estilos para apresentacao visual.',
        ano_criacao: 1996,},
        {
            id:3,
        nome:'JavaScript',
        categoria:'Frontend',
        descricao:'Linguagem de programacao para o navegador.',
        ano_criacao: 1995,},{
        id:4,
        nome:'PHP',
        categoria:'Backend',
        descricao:'Linguagem server-side para web dinamica.',
        ano_criacao: 1994,},
{
        id:5,
        nome:'MariaDB',
        categoria:'Banco de Dados',
        descricao:'SGBD relacional open-source.',
        ano_criacao: 2009,},

        {
        id:6,
        nome:'Git',
        categoria:'DevOps',
        descricao:'Sistema de controle de versao distribuido.',
        ano_criacao: 2005
    }
];

app.get('/', (req, res) => {
    res.send('API do Portfolio em Node: no ar');
});
app.get('/api/tecnologias', (req, res) => {
    res.json(tecnologias);
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
