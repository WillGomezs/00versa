/* Versa Concursos — inicialização defensiva v1.8.0. */
(() => {
  'use strict';

  let displayed = false;
  function showSafeError() {
    if (displayed) return;
    displayed = true;
    const root = document.getElementById('root');
    if (!root) return;
    const main = document.createElement('main');
    const title = document.createElement('strong');
    const message = document.createElement('span');
    main.className = 'startup';
    title.textContent = 'Não foi possível carregar o site';
    message.textContent = 'Recarregue a página. Se o problema continuar, use uma cópia íntegra do pacote oficial.';
    main.append(title, message);
    root.replaceChildren(main);
  }

  window.addEventListener('error', showSafeError);
  window.addEventListener('unhandledrejection', showSafeError);
})();
