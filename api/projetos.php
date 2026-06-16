<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

require __DIR__ . '/../conexao.php';
/**$id = filter_input(INPUT_GET, 'id', FILTER_VALIDATE_INT);

 */
$id = filter_input(INPUT_GET, 'id', FILTER_VALIDATE_INT);




    if($id){
        $sql = $pdo->prepare("SELECT id, nome, descricao, tecnologias, link_github, ano FROM projetos WHERE id = :id AND status = 'publicado' ORDER BY ano DESC");
        $sql->execute(['id' => $id]);
        $projetos = $sql->fetch();
        if($projetos){
        echo json_encode($projetos);
        }else{
            echo json_encode("Id não existe");
        }
    }
    else{
        $sql = "SELECT id, nome, descricao, tecnologias, link_github, ano FROM projetos WHERE  status = 'publicado' ORDER BY ano DESC, id";
        $projetos = $pdo->query($sql)->fetchAll();
        echo json_encode($projetos);

    }
    


?>