const textArea = document.getElementById('text-area');
const saveButton = document.getElementById('save-button');
const loadButton = document.getElementById('load-button');

saveButton.addEventListener('click', () => {
  const content = textArea.value;
  localStorage.setItem('savedContent', content);
  alert('Conteúdo salvo localmente.');
});

loadButton.addEventListener('click', () => {
  const savedContent = localStorage.getItem('savedContent');
  if (savedContent) {
    textArea.value = savedContent;
    alert('Conteúdo carregado do armazenamento local.');
  } else {
    alert('Nenhum conteúdo salvo.');
  }
});
