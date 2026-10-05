const express = require('express');
const cors = require('cors');
const pool = require('./db');
const app = express();
const PORTA = 3000;

app.use(cors());
app.use(express.json());



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
app.get('/api/tecnologias', async (req, res) => {
    try{
        const sql = "SELECT id, nome, categoria, descricao, ano_criacao from tecnologias WHERE status = 'ativo' ORDER BY categoria, nome";
        const [tecnologias] = await pool.query(sql);
        res.json(tecnologias);
    } catch(erro){
        res.status(500).json({ erro: 'Falha no servidor: ' + erro.message});

    }
});
app.post('/api/projetos', async (req, res) => {
    try{
        const dados = req.body;
        console.log(dados);
        if(!dados || !dados.nome){
            return res.status(400).json({ erro: 'Informe pelo menos o nome do projeto'});
        }
    const sql = 'INSERT INTO projetos (nome, descricao, tecnologias, link_github, ano, status) VALUES (?,?,?,?,?,?)';
    const [resultado] = await pool.execute(sql, [
        dados.nome, dados.descricao ?? '', dados.tecnologias ?? '',
        dados.link_github ?? '', dados.ano ?? new Date().getFullYear(), 'publicado'
    ]);
    res.status(201).json({id: resultado.insertId});
    } catch(erro){
        res.status(500).json({ erro: 'Falha no servidor: ' + erro.message});
    }
});
app.put('/api/projetos/:id', async (req, res) =>{
    try{
        const dados = req.body;
        if(!dados || !dados.nome){
            return res.status(400).json({ erro: 'Informe pelo menos o nome do projeto'});
        }
        const sql = 'UPDATE projetos SET nome = ?, descricao = ?, tecnologias = ?, link_github = ?, ano = ? WHERE id = ?';
       const [resultado] = await pool.execute(sql, [
        dados.nome, dados.descricao ?? '', dados.tecnologias ?? '',
        dados.link_github ?? '', dados.ano ?? new Date().getFullYear(), req.params.id
    ]);
    if (resultado.affectedRows === 0){
        return res.status(404).json({ erro: 'Projeto nao encontrado'});
    }
    res.json({ mensagem: 'Projeto atualizado'});
    } catch(erro){
        res.status(500).json({ erro: 'Falha no servidor: ' + erro.message});
    }
});
app.delete('/api/projetos/:id', async (req, res) => {
    try{
        const [resultado] = await pool.execute('DELETE FROM projetos WHERE id = ?', [req.params.id]);
        if(resultado.affectedRows === 0){
            return res.status(404).json({erro: 'Projeto nao encontrado' });
        }
        res.status(204).end();
    } catch(erro){
        res.status(500).json({ erro: 'Falha no servidor: ' + erro.message});
    }
});
app.get('/api/projetos', async (req, res) => {
    try{
    const sql = "SELECT id, nome, descricao, tecnologias, link_github, ano FROM projetos Where status = 'publicado' order by ano DESC, id";
    const [projetos] = await pool.query(sql);
    res.json(projetos);
    } catch(erro){
        res.status(500).json({ erro: 'Falha no servidor: ' + erro.message});
    }
});

app.get('/api/projetos/:id', async (req, res) => {
    try{
    const sql = "SELECT id, nome, descricao, tecnologias, link_github, ano FROM projetos WHERE id = ? AND status = 'publicado' ";
    const [linhas] = await pool.execute(sql, [req.params.id]);
    if(linhas.length === 0){
        return res.status(404).json({ erro: 'Projeto nao encontrado'});
    }
    res.json(linhas[0]);} catch(erro){
        res.status(500).json({ errp: 'Falha no servidor: ' + erro.message});
    }
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
