const senhaInput = document.getElementById('password');
const toggleBtn = document.getElementById('togglePassword');

toggleBtn.addEventListener('click', () => {
  const tipoAtual = senhaInput.getAttribute('type');
  const novoTipo = tipoAtual === 'password' ? 'text' : 'password';
  senhaInput.setAttribute('type', novoTipo);
  toggleBtn.textContent = novoTipo === 'password' ? 'Mostrar' : 'Ocultar';
});
