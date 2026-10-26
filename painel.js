// Verificacao do "login" (temporario)
const usuario = sessionStorage.getItem('usuarioLogado');
if (!usuario) {
  window.location.href = 'index.html';
}
document.getElementById('usuarioLogado').textContent = usuario || 'Usuário';

// Alternância de páginas via menu
const menuItens = document.querySelectorAll('.menu-item');
const paginas = document.querySelectorAll('.page');
const titulo = document.getElementById('tituloPagina');

const titulos = {
  home: 'Painel',
  clientes: 'Cadastro de Clientes',
  ordens: 'Ordens de Serviço',
  servicos: 'Cadastro de Serviços'
};

menuItens.forEach(item => {
  item.addEventListener('click', () => {
    const page = item.dataset.page;

    menuItens.forEach(i => i.classList.remove('active'));
    item.classList.add('active');

    paginas.forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + page).classList.add('active');

    titulo.textContent = titulos[page] || 'Painel';
  });
});

// Logout
document.getElementById('btnSair').addEventListener('click', () => {
  sessionStorage.removeItem('usuarioLogado');
  window.location.href = 'index.html';
});