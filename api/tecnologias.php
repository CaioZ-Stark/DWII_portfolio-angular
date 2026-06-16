<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

require __DIR__ . '/../conexao.php';
$id = filter_input(INPUT_GET, 'id', FILTER_VALIDATE_INT);

 if($id){
    $sql = $pdo->prepare("SELECT id, nome, categoria, descricao, ano_criacao FROM tecnologias WHERE id = :id AND status = 'ativo'");
    $sql->execute(['id'=>$id]);
    $tecnologias = $sql->fetch();
    if($tecnologias){
        echo json_encode($tecnologias);
    }else{
        echo json_encode("Id invalito");
    }
 }
 else{
    $sql = "SELECT id, nome, categoria, descricao, ano_criacao FROM tecnologias WHERE  status = 'ativo' ORDER BY categoria, id";
    $tecnologias = $pdo->query($sql)->fetchAll();
    echo json_encode($tecnologias);
 }

?>