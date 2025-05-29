document.addEventListener("DOMContentLoaded", () => {
  // --- Constantes e HTML Dinâmico ---
  const ACCESSIBILITY_HTML = `
    <div id="accessibility-button-container" class="d-flex flex-column align-items-center">
      <button id="accessibility-toggle" class="btn position-fixed bottom-0 start-0 m-3" aria-label="Abrir opções de acessibilidade" title="Acessibilidade">
        <i id="accessibility-icon" class="bi bi-universal-access"></i>
      </button>
      <div id="accessibility-options" class="position-fixed d-none">
        <div class="p-3 rounded shadow position-relative">
          <h6 class="text-center mb-2 accessibility-menu-title">Acessibilidade</h6>
          <button class="btn access-option-btn w-100 mb-2" id="theme-toggle" aria-label="Alternar tema claro/escuro" title="Alternar Tema">
            <i class="bi bi-brightness-high me-2"></i><span>Tema</span>
          </button>
          <div class="d-flex justify-content-between mb-2">
            <button class="btn access-option-btn flex-fill me-1" id="decrease-font" aria-label="Diminuir tamanho da fonte" title="Diminuir Fonte"><i class="bi bi-zoom-out"></i></button>
            <button class="btn access-option-btn flex-fill ms-1" id="increase-font" aria-label="Aumentar tamanho da fonte" title="Aumentar Fonte"><i class="bi bi-zoom-in"></i></button>
          </div>
          <button class="btn access-option-btn w-100 mb-2" id="reset-font" aria-label="Restaurar tamanho da fonte padrão" title="Restaurar Fonte">
            <i class="bi bi-fonts me-2"></i><span>Restaurar</span>
          </button>
          <button class="btn access-option-btn w-100 text-danger" id="hide-accessibility-widget" aria-label="Esconder menu de acessibilidade" title="Esconder Widget">
            <i class="bi bi-eye-slash me-2"></i><span>Esconder</span>
          </button>
          <button class="btn-close-accessibility-menu" id="close-accessibility-options" aria-label="Fechar menu de acessibilidade" title="Fechar Menu"></button>
        </div>
      </div>
    </div>
  `;

  // --- Injeção do HTML ---
  document.body.insertAdjacentHTML("beforeend", ACCESSIBILITY_HTML);

  // --- Seletores do DOM ---
  const elements = {
    body: document.body,
    docElement: document.documentElement,
    toggleButton: document.getElementById("accessibility-toggle"),
    optionsMenu: document.getElementById("accessibility-options"),
    themeToggleButton: document.getElementById("theme-toggle"),
    increaseFontButton: document.getElementById("increase-font"),
    decreaseFontButton: document.getElementById("decrease-font"),
    resetFontButton: document.getElementById("reset-font"),
    closeOptionsButton: document.getElementById("close-accessibility-options"),
    hideWidgetButton: document.getElementById("hide-accessibility-widget"),
    accessibilityIcon: document.getElementById("accessibility-icon"),
    widgetContainer: document.getElementById('accessibility-button-container'),
    filterOffcanvas: document.getElementById('filterOffcanvas') // Para interação com filtros
  };

  // --- Estado e Configurações ---
  const BASE_FONT_SIZE_EM = 1;
  const FONT_STEP = 0.1;
  const MIN_FONT_SIZE_EM = 0.7;
  const MAX_FONT_SIZE_EM = 1.5;
  let currentFontSize = parseFloat(localStorage.getItem("vexorFontSize")) || BASE_FONT_SIZE_EM;

  // --- Funções Auxiliares ---
  const updateThemeIcon = (theme) => {
    if (elements.accessibilityIcon && elements.themeToggleButton) {
      const themeIcon = elements.themeToggleButton.querySelector('i');
      if (theme === "dark") {
        elements.accessibilityIcon.className = 'bi bi-sun-fill'; // Ícone principal do widget
        if (themeIcon) themeIcon.className = 'bi bi-sun me-2';    // Ícone no botão de tema
      } else {
        elements.accessibilityIcon.className = 'bi bi-moon-stars-fill';
        if (themeIcon) themeIcon.className = 'bi bi-moon-stars-fill me-2';
      }
    }
  };

  const applyTheme = (theme) => {
    if (theme === "dark") {
      elements.docElement.setAttribute("data-theme", "dark");
    } else {
      elements.docElement.removeAttribute("data-theme");
    }
    localStorage.setItem("vexorTheme", theme);
    updateThemeIcon(theme);
  };

  const applyFontSize = (size) => {
    currentFontSize = Math.max(MIN_FONT_SIZE_EM, Math.min(size, MAX_FONT_SIZE_EM));
    elements.body.style.fontSize = currentFontSize + "em";
    localStorage.setItem("vexorFontSize", currentFontSize);
  };

  const toggleOptionsMenu = (show) => {
    if (elements.optionsMenu) {
      if (show) {
        adjustOptionsMenuPosition();
        elements.optionsMenu.classList.remove("d-none");
        elements.optionsMenu.classList.add("fade-in-options"); // Para animação de entrada
        elements.toggleButton.setAttribute("aria-expanded", "true");
      } else {
        elements.optionsMenu.classList.add("d-none");
        elements.optionsMenu.classList.remove("fade-in-options");
        elements.toggleButton.setAttribute("aria-expanded", "false");
      }
      localStorage.setItem("vexorAccessibilityOpen", show);
    }
  };
  
  const adjustOptionsMenuPosition = () => {
    if (!elements.optionsMenu || !elements.toggleButton) return;

    const buttonRect = elements.toggleButton.getBoundingClientRect();
    const menuHeight = elements.optionsMenu.offsetHeight;
    const menuWidth = elements.optionsMenu.offsetWidth;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const gap = 10; // Espaço entre o botão e o menu

    let top, left, bottom, right;

    // Prioriza abrir para cima e para a direita do botão
    bottom = viewportHeight - buttonRect.top + gap;
    left = buttonRect.left + buttonRect.width + gap;

    // Ajusta se sair da tela
    if (left + menuWidth > viewportWidth - gap) { // Se passar da direita
        left = buttonRect.left - menuWidth - gap; // Abre para a esquerda
    }
    if (buttonRect.top - menuHeight - gap < gap) { // Se passar do topo (abrindo para cima)
        bottom = 'auto';
        top = buttonRect.bottom + gap; // Abre para baixo
    } else {
        top = 'auto'; // Garante que 'top' não está definido se 'bottom' for usado
    }
    
    // Ajustes finais para não sair da tela
    if (left < gap) left = gap;
    if (top < gap && bottom === 'auto') top = gap;


    elements.optionsMenu.style.bottom = bottom !== 'auto' ? `${bottom}px` : 'auto';
    elements.optionsMenu.style.left = `${left}px`;
    elements.optionsMenu.style.top = top !== 'auto' ? `${top}px` : 'auto';
    elements.optionsMenu.style.right = 'auto';
  };


  // --- Manipuladores de Eventos ---
  const handleThemeToggle = () => {
    const currentTheme = elements.docElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(currentTheme);
  };

  const handleIncreaseFont = () => applyFontSize(currentFontSize + FONT_STEP);
  const handleDecreaseFont = () => applyFontSize(currentFontSize - FONT_STEP);
  const handleResetFont = () => applyFontSize(BASE_FONT_SIZE_EM);

  // --- Inicialização ---
  const initializeAccessibility = () => {
    // Aplica tema salvo
    const savedTheme = localStorage.getItem("vexorTheme") || "light";
    applyTheme(savedTheme);

    // Aplica tamanho da fonte salvo
    applyFontSize(currentFontSize);

    // Verifica se o menu deve estar aberto
    if (localStorage.getItem("vexorAccessibilityOpen") === "true" && elements.optionsMenu) {
      toggleOptionsMenu(true);
    }

    // Mostra o widget se não estiver explicitamente escondido
    if (localStorage.getItem("vexorAccessibilityHidden") !== "true") {
        if (elements.widgetContainer) elements.widgetContainer.style.display = 'flex';
    } else {
        if (elements.widgetContainer) elements.widgetContainer.style.display = 'none';
    }
  };

  // --- Event Listeners ---
  const setupEventListeners = () => {
    if (elements.toggleButton) {
      elements.toggleButton.addEventListener("click", () => {
        const isOptionsMenuHidden = elements.optionsMenu?.classList.contains("d-none");
        toggleOptionsMenu(isOptionsMenuHidden);
      });
    }
    if (elements.themeToggleButton) elements.themeToggleButton.addEventListener("click", handleThemeToggle);
    if (elements.increaseFontButton) elements.increaseFontButton.addEventListener("click", handleIncreaseFont);
    if (elements.decreaseFontButton) elements.decreaseFontButton.addEventListener("click", handleDecreaseFont);
    if (elements.resetFontButton) elements.resetFontButton.addEventListener("click", handleResetFont);
    if (elements.closeOptionsButton) elements.closeOptionsButton.addEventListener("click", () => toggleOptionsMenu(false));
    
    if (elements.hideWidgetButton) {
      elements.hideWidgetButton.addEventListener("click", () => {
        if (elements.widgetContainer) elements.widgetContainer.style.display = 'none';
        localStorage.setItem("vexorAccessibilityHidden", "true");
        toggleOptionsMenu(false); // Fecha o menu ao esconder o widget
      });
    }

    // Interação com Offcanvas de Filtros (se existir na página)
    if (elements.filterOffcanvas && elements.widgetContainer) {
      elements.filterOffcanvas.addEventListener('show.bs.offcanvas', () => {
        elements.widgetContainer.style.visibility = 'hidden';
        elements.widgetContainer.style.opacity = '0';
        elements.widgetContainer.style.transition = 'visibility 0s linear 0.3s, opacity 0.3s linear';
      });
      elements.filterOffcanvas.addEventListener('shown.bs.offcanvas', () => {
        if (elements.widgetContainer.style.visibility !== 'hidden') {
          elements.widgetContainer.style.visibility = 'hidden';
          elements.widgetContainer.style.opacity = '0';
        }
      });
      elements.filterOffcanvas.addEventListener('hide.bs.offcanvas', () => {
        if (localStorage.getItem("vexorAccessibilityHidden") !== "true") {
            elements.widgetContainer.style.removeProperty('transition');
            elements.widgetContainer.style.visibility = 'visible';
            elements.widgetContainer.style.opacity = '1';
            elements.widgetContainer.style.transition = 'opacity 0.3s linear 0.2s';
        }
      });
      elements.filterOffcanvas.addEventListener('hidden.bs.offcanvas', () => {
        if (localStorage.getItem("vexorAccessibilityHidden") !== "true") {
            elements.widgetContainer.style.display = 'flex';
            elements.widgetContainer.style.visibility = 'visible';
            elements.widgetContainer.style.opacity = '1';
        }
      });
    }
  };

  // --- Execução ---
  initializeAccessibility();
  setupEventListeners();
});