(function () {
  const body = document.body;

  const openMobileNav = document.querySelector('[data-open-mobile-nav]');
  const closeMobileNav = document.querySelector('[data-close-mobile-nav]');
  const mobileNav = document.getElementById('mobile-nav');

  const openSearch = document.querySelector('[data-open-search]');
  const closeSearch = document.querySelector('[data-close-search]');
  const searchModal = document.getElementById('search-modal');

  function toggle(el, show) {
    if (!el) return;
    el.classList.toggle('is-open', show);
    el.setAttribute('aria-hidden', show ? 'false' : 'true');
    body.style.overflow = show ? 'hidden' : '';
  }

  openMobileNav?.addEventListener('click', function () {
    toggle(mobileNav, true);
  });

  closeMobileNav?.addEventListener('click', function () {
    toggle(mobileNav, false);
  });

  openSearch?.addEventListener('click', function () {
    toggle(searchModal, true);
  });

  closeSearch?.addEventListener('click', function () {
    toggle(searchModal, false);
  });

  mobileNav?.addEventListener('click', function (event) {
    if (event.target === mobileNav) toggle(mobileNav, false);
  });

  searchModal?.addEventListener('click', function (event) {
    if (event.target === searchModal) toggle(searchModal, false);
  });
})();
