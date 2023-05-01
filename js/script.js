const form = document.getElementById('form-cadastro');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const senha2 = document.getElementById('senha2');

form.addEventListener('submit', function(event) {

  if (!email.value) {
    event.preventDefault();
    alert('Campo de e-mail obrigatório!');
  } else if (!/\S+@\S+\.\S+/.test(email.value)) {
    event.preventDefault(); 
    alert('E-mail inválido!');
  }


  if (!senha.value) {
    event.preventDefault(); 
    alert('Campo de senha obrigatório!');
  } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/.test(senha.value)) {
    event.preventDefault();
    alert('A senha deve conter pelo menos 8 caracteres, sendo pelo menos uma letra e um número!');
  }

  
  if (!senha2.value) {
    event.preventDefault();
    alert('Campo de repetir senha obrigatório!');
  } else if (senha.value !== senha2.value) {
    event.preventDefault(); 
    alert('As senhas não conferem!');
  }
});