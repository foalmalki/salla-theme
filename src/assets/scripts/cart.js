(function () {
  const qtyWrappers = document.querySelectorAll('.cart-item__qty');
  qtyWrappers.forEach(function (wrapper) {
    const input = wrapper.querySelector('input');
    const buttons = wrapper.querySelectorAll('button');
    const minus = buttons[0];
    const plus = buttons[1];

    minus?.addEventListener('click', function () {
      const current = Number(input.value || 1);
      input.value = Math.max(1, current - 1);
    });

    plus?.addEventListener('click', function () {
      const current = Number(input.value || 1);
      input.value = current + 1;
    });
  });
})();
