const bcrypt = require('bcryptjs');
const pool = require('./db');

async function criar() {
    const email = process.argv[2];
    const senha = process.argv[3];
    if (!email || !senha) {
        console.log('Uso: node criar-usuario.js email senha');
        return;
    }

    try {
        const hash = await bcrypt.hash(senha, 10);
        const [resultado] = await pool.execute(
            'INSERT INTO usuarios_final (email, senha_hash) VALUES (?, ?)',
            [email, hash]
        );
        console.log('Usuario ' + resultado.insertId + ' criado: ' + email);
    } catch (erro) {
        if (erro.code === 'ER_DUP_ENTRY') {
            console.log('Ja existe um usuario com o email ' + email);
        } else {
            console.log('Falha ao criar usuario: ' + erro.message);
        }
    } finally {
        await pool.end();
    }
}

criar();