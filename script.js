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

  // Login visual: qualquer usuário/senha é aceito
  sessionStorage.setItem('usuarioLogado', usuario);
  window.location.href = 'painel.html';
});

linkEsqueci.addEventListener('click', (e) => {
  e.preventDefault();
  alert('Funcionalidade de recuperação de senha em breve.');
});