<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nome = htmlspecialchars(trim($_POST["nome"] ?? ""));
    $email = htmlspecialchars(trim($_POST["email"] ?? ""));
    $mensagem = htmlspecialchars(trim($_POST["mensagem"] ?? ""));

    $mensagem = "";
    if (!empty($nome) && !empty($email) || !empty($mensagem)) {
        $mensagem = "
        <div class='container'>
            <h2>Mensagem enviada com sucesso!</h2>
            <p class='mensagem'><strong>Nome:</strong> $nome<br>
            <strong>Email:</strong> $email<br><strong>Mensagem:</strong> $mensagem</p>
            <p style='text-align:center; margin-top:20px;'>
                <a href='index.html' style='color: #007bff;'>Voltar ao formulário</a>
            </p>
        </div>";
    } else {
        $mensagem = "<p class='mensagem' style='color: red;'>Erro: Preencha todos os campos!</p>";
    }
} else {
    $mensagem = "<p class='mensagem' style='color: red;'>Acesso inválido.</p>";
}
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Mensagem Enviada</title>
    <link rel="stylesheet" href="/src/styles/global.css">
</head>
<body>
    <?php echo $mensagem; ?>
</body>
</html>