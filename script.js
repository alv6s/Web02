// Função para alterar o idioma da página
function setLanguage(lang) {
    // Pega todos os elementos com a classe 'translate'
    const elements = document.querySelectorAll('.translate');

    // Atualiza o texto de cada elemento conforme o idioma selecionado
    elements.forEach((element) => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Função para inicializar o idioma ao carregar a página
function init() {
    // Definir idioma padrão como português
    setLanguage('pt');

    // Verificar se o usuário selecionou outro idioma
    const languageSelector = document.getElementById('language-selector');
    languageSelector.addEventListener('change', (e) => {
        setLanguage(e.target.value);
    });
}

// Inicializa o script
window.onload = init;
