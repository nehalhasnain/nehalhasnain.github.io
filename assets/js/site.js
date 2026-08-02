(() => {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.nav-list');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
      toggle.textContent = open ? '×' : '☰';
    });
    menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation menu');
      toggle.textContent = '☰';
    }));
  }
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('pointermove', event => {
      const box = link.getBoundingClientRect();
      link.style.setProperty('--pointer-x', `${event.clientX - box.left}px`);
      link.style.setProperty('--pointer-y', `${event.clientY - box.top}px`);
    });
  });
  const form = document.querySelector('[data-mailto-form]');
  if (form) form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const body = `${data.get('message')}\n\n---\nFrom: ${data.get('name')}\nReply to: ${data.get('email')}`;
    window.location.href = `mailto:nehal.has9@gmail.com?subject=${encodeURIComponent('Portfolio enquiry from ' + data.get('name'))}&body=${encodeURIComponent(body)}`;
  });
})();
