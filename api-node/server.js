const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('./db');
const app = express();
const PORTA = 3000;

app.use(cors());
app.use(express.json());

const SEGREDO = 'troque-por-uma-frase-longa-que-so-voce-sabe';




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

app.get('/api/tecnologias/:id', async (req, res) => {
    try{
    const sql = "SELECT id, nome, categoria, descricao, ano_criacao, criado_em from tecnologias WHERE id = ? AND status = 'ativo' ";
    const [linhas] = await pool.execute(sql, [req.params.id]);
    if(linhas.length === 0){
        return res.status(404).json({ erro: 'Tecnologia nao encontrado'});
    }
    res.json(linhas[0]);} catch(erro){
        res.status(500).json({ erro: 'Falha no servidor: ' + erro.message});
    }
});

app.post('/api/tecnologias', autenticar, async (req, res) => {
    try{
        const dados = req.body;
        console.log(dados);
        if (!dados || typeof dados.nome !== 'string' || !dados.nome.trim()) {
            return res.status(400).json({erro: 'Informe o nome da tecnologia.'});
        }
    const sql = 'INSERT INTO tecnologias (nome, categoria, descricao, ano_criacao, status, criado_em) VALUES (?,?,?,?,?,?)';
    const [resultado] = await pool.execute(sql, [
        dados.nome, dados.categoria ?? '', dados.descricao ?? '',
        dados.ano_criacao ?? new Date().getFullYear(), 'ativo', dados.criado_em ?? new Date()
    ]);
    res.status(201).json({id: resultado.insertId, message:"Tecnologia cadastrada com sucesso"});
    } catch(erro){
        res.status(500).json({ erro: 'Falha no servidor: ' + erro.message});
    }
});
app.put('/api/tecnologias/:id', autenticar, async (req, res) =>{
    try{
        const dados = req.body;
        const id = req.params.id;
        const [tecnologias] = await pool.execute(
            'SELECT status FROM tecnologias WHERE id = ?',
            [id]
        );
        
        if (!dados || typeof dados.nome !== 'string' || !dados.nome.trim()){
            return res.status(400).json({ erro: 'Informe pelo menos o nome da tecnologia'});
        }

        const statusAtual = tecnologias[0].status;

        const sql = 'UPDATE  tecnologias SET nome = ?, categoria = ?,  descricao = ?, ano_criacao = ?, status = ? WHERE id = ?';
       const [resultado] = await pool.execute(sql, [
        dados.nome, dados.categoria ?? '', dados.descricao ?? '',
        dados.ano_criacao ?? new Date().getFullYear(), dados.status ?? statusAtual, id
    ]);
    if (resultado.affectedRows === 0){
        return res.status(404).json({ erro: 'Tecnologia nao encontrado'});
    }
    res.json({ mensagem: 'Tecnologia atualizado'});
    } catch(erro){
        res.status(500).json({ erro: 'Falha no servidor: ' + erro.message});
    }
});
app.delete('/api/tecnologias/:id', autenticar, async (req, res) => {
    try{
        const [resultado] = await pool.execute('DELETE FROM tecnologias WHERE id = ?', [req.params.id]);
        if(resultado.affectedRows === 0){
            return res.status(404).json({erro: 'tecnologia nao encontrado' });
        }
        res.status(204).end();
    } catch(erro){
        res.status(500).json({ erro: 'Falha no servidor: ' + erro.message});
    }
});

app.post('/api/projetos', autenticar, async (req, res) => {
    try{
        const dados = req.body;
        console.log(dados);
        if(!dados || typeof dados.nome !== 'string' || !dados.nome.trim()){
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
app.put('/api/projetos/:id', autenticar, async (req, res) =>{
    try{
        const dados = req.body;
        const id = req.params.id;
        const [projetos] = await pool.execute(
            'SELECT status FROM projetos WHERE id = ?',
            [id]
        );
        
        if(!dados || typeof dados.nome !== 'string' || !dados.nome.trim()){
            return res.status(400).json({ erro: 'Informe pelo menos o nome do projeto'});
        }

        const statusAtual = projetos[0].status;

        const sql = 'UPDATE projetos SET nome = ?, descricao = ?, tecnologias = ?, link_github = ?, ano = ?, status = ? WHERE id = ?';
       const [resultado] = await pool.execute(sql, [
        dados.nome, dados.descricao ?? '', dados.tecnologias ?? '',
        dados.link_github ?? '', dados.ano ?? new Date().getFullYear(), dados.status ?? statusAtual ,id
    ]);
    if (resultado.affectedRows === 0){
        return res.status(404).json({ erro: 'Projeto nao encontrado'});
    }
    res.json({ mensagem: 'Projeto atualizado'});
    } catch(erro){
        res.status(500).json({ erro: 'Falha no servidor: ' + erro.message});
    }
});
app.delete('/api/projetos/:id', autenticar, async (req, res) => {
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
app.get('/api/projetos/todos', autenticar, async (req, res) => {
    try{
    const sql = "SELECT id, nome, descricao, tecnologias, link_github, ano FROM projetos ";
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
        res.status(500).json({ erro: 'Falha no servidor: ' + erro.message});
    }
});

app.post('/api/login', async (req, res) => {
   try {
    const dados = req.body;
    if(!dados || !dados.email || !dados.senha){
        return res.status(400).json({ erro: 'Informe email e senha'});
    }
    const [linhas] = await pool.execute('SELECT id, email, senha_hash from usuarios_final where email = ?', [dados.email]);
    const usuario = linhas[0];
    if(!usuario){
        return res.status(401).json({ erro: 'Email ou senha invalidos, verifique suas credenciais '});
    }
    const confere = await bcrypt.compare(dados.senha, usuario.senha_hash);
    if (!confere){
        return res.status(401).json({ erro: 'Email ou senha invalidos, verifique suas credenciais '});
    }
    const token = jwt.sign({ id: usuario.id, email: usuario.email}, SEGREDO, { expiresIn: '1h'});
    res.json({ token});
}catch(erro){
    res.status(500).json({ erro: 'Falha no servidor: ' + erro.message});
}

});

function autenticar(req, res, next){
    const cabecalho = req.headers.authorization ?? '';

    if (!cabecalho.startsWith('Bearer ')) {
        return res.status(401).json({
            erro: 'Acesso negado: informe um token de autenticação válido.'
        });
    }
    const token = cabecalho.slice(7).trim();
    if (!token) {
        return res.status(401).json({
            erro: 'Acesso negado: o token de autenticação não foi informado.'
        });
    }
    try{
        req.usuario = jwt.verify(token, SEGREDO);
        next();
    } catch(erro){
        return res.status(401).json({ erro: 'Autenticação recusada: token inválido ou expirado. Faça login novamente.'});
    }
}



app.listen(PORTA, () => {
    console.log('API no ar em http://localhost:' + PORTA);
});
