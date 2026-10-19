const form = document.getElementById('loginForm');
const linkEsqueci = document.getElementById('esqueciSenha');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const usuario = document.getElementById('usuario').value.trim();
  const senha = document.getElementById('senha').value;

  if (!usuario || !senha) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  alert(`Login realizado com sucesso!\nUsuário: ${usuario}`);
  form.reset();
});

linkEsqueci.addEventListener('click', (e) => {
  e.preventDefault();
  alert('Funcionalidade de recuperação de senha em breve.');
});