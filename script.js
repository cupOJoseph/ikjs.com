const buttons = [...document.querySelectorAll('.filter')];
const cards = [...document.querySelectorAll('.project-card')];
const visibleCount = document.querySelector('#visible-count');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;
    buttons.forEach((item) => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });

    let count = 0;
    cards.forEach((card) => {
      const visible = category === 'all' || card.dataset.category === category;
      card.hidden = !visible;
      if (visible) count += 1;
    });
    visibleCount.textContent = String(count).padStart(2, '0');
  });
});
