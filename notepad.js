const textArea = document.getElementById('text-area');
const saveButton = document.getElementById('save-button');
const imageInput = document.getElementById('image-input');
const imageContainer = document.getElementById('image-container');

// Carregar o conteúdo salvo no armazenamento local, se existir
const savedContent = localStorage.getItem('notepadContent');
if (savedContent) {
  textArea.value = savedContent;
}

textArea.addEventListener('input', () => {
  // Salvar o conteúdo no armazenamento local do navegador
  localStorage.setItem('notepadContent', textArea.value);
});

saveButton.addEventListener('click', () => {
  // Cria um elemento de link para fazer o download do conteúdo
  const content = textArea.value;
  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'notepad.txt';

  // Clique automaticamente no link de download
  document.body.appendChild(a);
  a.click();

  // Remova o link após o download
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
});

imageInput.addEventListener('change', () => {
  const file = imageInput.files[0];
  if (file) {
    const imageUrl = URL.createObject
  }})

saveButton.addEventListener('click', () => {
    const content = textArea.value;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'notepad.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  });
  