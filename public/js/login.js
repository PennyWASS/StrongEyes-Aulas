function login(){
    const login_correto = "walisson";
    const senha_correta = "senha123";
    let login_informado = document.getElementById("email").value;
    let senha_informada = document.getElementById("senha").value;
    // alert("login digitado: " + login_informado + "\n  senha digitada: " + senha_informada)
    if(login_informado == login_correto && senha_informada == senha_correta){
        let continuar_logado = document.getElementById("remember-me");
        window.location.href = "index.html"
        
        if(continuar_logado){
            document.cookie = "logado=1";
        }

    }else{
        alert("Não funciona 🙁");
    }
}

function registro(){
    let nome_usuario = document.getElementById("nome").value;
    let email_usuario = document.getElementById("email").value;
    let senha_usuario = document.getElementById("senha").value;
    let repet_senha = document.getElementById("repet-senha").value;
    
    if(senha_usuario == repet_senha){
        alert("Ta igual 👍")
    }

}