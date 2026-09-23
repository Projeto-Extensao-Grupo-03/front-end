function login(){
    var usuario = document.getElementById("input_usuario").value;
    var senha = document.getElementById("input_senha").value;

    fetch("http://localhost:8080/login",{
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            usuario: usuario,
            senha: senha
        })
    }).then(function(resposta){
        if (resposta.status == 200){
            window.location.href = "index.html"
        } else {
            alert("Usuario ou Senha inválidos!")
        }
    }).catch(function(erro){
        console.error("Erro API", erro);
        alert("Conexão indisponível")
    })
}