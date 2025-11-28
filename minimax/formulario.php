<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

  <html xmlns="http://www.w3.org/1999/xhtml">
  <head>
	<title>formulário</title>
	<meta charset="utf-8"/>
	<link rel="stylesheet" type="text/css" href="estilo.css" media="screen">
</head>
<body>
	<?php
     $data=$_POST["data"];
     $nome=$_POST["nome"];
     $telefone=$_POST["telefone"];
     $email=$_POST["email"];

      // as próximas 3 linhas são responsáveis em se conectar com o bando de dados
      $con = mysql_connect("127.0.0.1", "root", "digite a senha do banco aqui") or die ("Sem conexão com o servidor");
      $select = mysql_select_db("server") or die("Sem acesso ao DB, Entre em contato com o Administrador");

      // A variavel $result pega as varias $login e $senha, faz uma pesquisa na tabela de usuarios
$result = mysql_query("SELECT * FROM `USUARIO` WHERE `NOME` = '$telefone' AND `data`= '$email'");
/* Logo abaixo temos um bloco com if e else, verificando se a variável $result foi bem sucedida, ou seja se ela estiver encontrado algum registro idêntico o seu valor será igual a 1, se não, se não tiver registros seu valor será 0. Dependendo do resultado ele redirecionará para a pagina site.php ou retornara  para a pagina do formulário inicial para que se possa tentar novamente realizar o login */
if(mysql_num_rows ($result) > 0 )
{
$_SESSION["telefone"] = $telefone;
$_SESSION["data"] = $data;
$_SESSION["email"] = $emal;
$_SESSION["nome"] = $nome;
header("location:formulario.php");
}
else{
    unset ($_SESSION["telefone"]);
    unset ($_SESSION["data"]);
    unset ($_SESSION["email"]);
    unset ($_SESSION["nome"]);
    header("location:formulario.php");
    
    }


     //expressão regular
     $telefone="xxxxx-xxxx";
     if(!preg_match(^\(+[0-9][2,3]\)[0-9](4)-[0-9](4,3$^,$telefone))){
     	echo "telefone valido";
     }else{
     	echo "telfone invalido";
     }
    //expressão regular
//validar telefone

     $data="xx/xx/xxx";
     if(!preg_match(^/^, d{1,2}/d{1,2}/d{4}$/,$data)){
     	echo "data valida";
     }else{
     	echo "data invalida";
     }
     //expressão regular
//validar data

     $email="xxxxxxx@gmail.com";
     if(!filter emaill($email, filter validate_email)){
     	echo "email valido";
     }else{
     	echo "email invalido";
     }
     //expressão regular
     //validando email

     $nome=$_POST["nome"];
     if(strlen  ($nome)<=30){

     	echo "preencha com no mínimo 7 caracteres e máximo 30 caracteres";
     }else{
     	echo "Seu nome\"$nome"\.strlen;
     	($nome)."caracteres";
     }
//expressão regular
     //validando nome

	?>
     
</body>
</html>