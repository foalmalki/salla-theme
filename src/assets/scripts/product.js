(function () {
  const sticky = document.querySelector('[data-sticky-atc]');
  if (!sticky) return;

  function update() {
    const y = window.scrollY || window.pageYOffset;
    sticky.classList.toggle('is-visible', y > 520);
  }

  update();
  window.addEventListener('scroll', update, { passive: true });
})();
