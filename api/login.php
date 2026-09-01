<?php

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: https://laughing-barnacle-5g69x99pr6x43j4g-4200.app.github.dev');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

try {

    require __DIR__ . '/../conexao.php';

    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        http_response_code(405);
        echo json_encode([
            'erro' => 'Método não permitido'
        ]);
        exit;
    }
    
    $dados = json_decode(file_get_contents('php://input'), true);

    $login = trim($dados['usuario'] ?? '');
    $senha = trim($dados['senha'] ?? '');

    if ($login === '' || $senha === '') {
        http_response_code(400);
        echo json_encode([
            'erro' => 'Informe usuário e senha'
        ]);
        exit;
    }

    $sql = 'SELECT id, usuario, senha FROM usuarios WHERE usuario = ?';

    $stmt = $pdo->prepare($sql);
    $stmt->execute([$login]);

    $usuario = $stmt->fetch(PDO::FETCH_ASSOC);
    $usuario['senha'] = password_hash($usuario['senha'], PASSWORD_DEFAULT);

    if (!$usuario || !password_verify($senha, $usuario['senha'])) {
        http_response_code(401);
        echo json_encode([
            'erro' => 'Usuário ou senha incorretos'
        ]);
        exit;
    }

    session_start();

    $_SESSION['usuario'] = $usuario['usuario'];
    $_SESSION['id'] = $usuario['id'];

    echo json_encode([
        'sucesso' => true,
        'mensagem' => 'Login realizado com sucesso',
        'usuario' => $usuario['usuario']
    ]);

} catch (Throwable $e) {

    http_response_code(500);

    echo json_encode([
        'erro' => 'Erro interno: ' . $e->getMessage()
    ]);
}