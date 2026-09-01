<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

set_exception_handler(function ($e){
    http_response_code(500);
    echo json_encode(['erro' => 'Falha no servidor: ' . $e->getMessage()]);
});

if($_SERVER['REQUEST_METHOD'] === 'OPTIONS'){
    http_response_code(204);
    exit;
}

require __DIR__ . '/../conexao.php';
/**$id = filter_input(INPUT_GET, 'id', FILTER_VALIDATE_INT);

 */
$metodo = $_SERVER['REQUEST_METHOD'];
$id = isset($_GET['id']) ? (int) $_GET['id'] : 0;
if($metodo === 'GET'){

    $todos = isset($_GET['todos']) && $_GET['todos'] == '1';

        if ($todos === 1) {
            $sql = "SELECT id, nome, descricao, tecnologias, link_github, ano, status
                FROM projetos
                ORDER BY ano DESC, id";
            }
            else {
                $sql = "SELECT id, nome, descricao, tecnologias, link_github, ano, status
                 FROM projetos
                 WHERE status = 'publicado'
                 ORDER BY ano DESC, id";
    }

    $projetos = $pdo->query($sql)->fetchAll();

    echo json_encode($projetos);
    exit;
}
   
    if($metodo === 'POST'){
        $dados = json_decode(file_get_contents('php://input'), true);
        if(!$dados || empty($dados['nome'])){
            http_response_code(400);
            echo json_encode(['erro' => 'Informe pelo menos o nome do projeto']);
            exit;
        }
        $sql = 'INSERT INTO projetos(nome, descricao, tecnologias, link_github, ano, status)
        VAlUES(?,?,?,?,?,?)';
        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            $dados['nome'],
            $dados['descricao'] ?? '',
            $dados['tecnologias'] ?? '',
            $dados['link_github'] ?? '',
            $dados['ano'] ?? date('Y'),
            $dados['status'],
        ]);
        http_response_code(201);
        echo json_encode(['id' => (int) $pdo->lastInsertId()]);
        exit;
    }

    if($metodo === 'PUT'){
        if($id <= 0){
            http_response_code(400);
            echo json_encode(['erro' => 'PUT exige o id na URL: ?id=NN']);
            exit;
        }
        $dados = json_decode(file_get_contents('php://input'), true);
        if(!$dados || empty($dados['nome'])){
            http_response_code(400);
            echo json_encode(['erro' => 'Informe pelo menos o nome do projeto']);
            exit;
        }
        $sql = 'UPDATE projetos set nome = ?, descricao = ?, tecnologias = ?, link_github = ?, ano = ?, status = ? WHERE id = ?';
        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            $dados['nome'],
            $dados['descricao'] ?? '',
            $dados['tecnologias'] ?? '',
            $dados['link_github'] ?? '',
            $dados['ano'] ?? date('Y'),
            $dados['status'],
            $id
        ]);
        http_response_code(200);
        echo json_encode(['mensagem' => 'Projeto atualizado']);
        exit;
    }

    if($metodo === 'DELETE'){
        if($id <= 0){
            http_response_code(400);
            echo json_encode(['erro' => 'DELETE exige o id na URL: ?id=NN']);
            exit;
        }
         $sql = 'DELETE FROM projetos WHERE id = ?';
        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            $id
        ]);
        if($stmt->rowCount() === 0){
            http_response_code(404);
            echo json_encode(['erro' => 'Projeto nao encontrado']);
            exit;
        }
        http_response_code(204);
        exit;
    }

http_response_code(405);
echo json_encode(['erro' => 'Metodo nao permitido']);


?>