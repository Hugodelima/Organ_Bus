const form = document.getElementById('form-cadastro');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const senha2 = document.getElementById('senha2');
const botaoMostrarSenha = document.getElementById('mostrar-senha');
const inputSenha = document.getElementById('senha');

form.addEventListener('submit', function(event) {
  let valido = true;

  if (!email.value) {
    event.preventDefault();
    alert('Campo de e-mail obrigatório!');
    valido = false;
  } else if (!/\S+@\S+\.\S+/.test(email.value)) {
    event.preventDefault(); 
    alert('E-mail inválido!');
    valido = false;
  }

  if (!senha.value) {
    event.preventDefault(); 
    alert('Campo de senha obrigatório!');
    valido = false;
  } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/.test(senha.value)) {
    event.preventDefault();
    alert('A senha deve conter pelo menos 8 caracteres, sendo pelo menos uma letra e um número!');
    valido = false;
  }

  if (!senha2.value) {
    event.preventDefault();
    alert('Campo de repetir senha obrigatório!');
    valido = false;
  } else if (senha.value !== senha2.value) {
    event.preventDefault(); 
    alert('As senhas não conferem!');
    valido = false;
  }

  if (email.value && /\S+@\S+\.\S+/.test(email.value) && senha.value && /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/.test(senha.value) && senha2.value && senha.value === senha2.value) {
    event.preventDefault(); 
    window.location.href = "pagina-de-sucesso.html"; 
  } else {
    event.preventDefault(); 
    window.location.href = "index.html"; 
  }

});


botaoMostrarSenha.addEventListener('click', function() {
  if (inputSenha.type === 'password') {
    inputSenha.type = 'text';
  } else {

    inputSenha.type = 'password';
  }
});

