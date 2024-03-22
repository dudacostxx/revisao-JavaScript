function enviar() {
  let nomeUser = "usuario"
  let senhaUser = "1234"

  let usuario = document.getElementById("usuario").value;
  let senha = document.getElementById("senha").value;
  console.log(usuario, senha);

  if (nomeUser != usuario || senhaUser != senha) {
    alert("usuario ou senha incorretos")

  }

  if (nomeUser == usuario && senhaUser == senha) {
    alert("Usuario logado")
    window.location.href = "login.html";

  }
}