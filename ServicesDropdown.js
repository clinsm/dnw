document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.services-dropdown').forEach(function (dropdown) {
    var toggle = dropdown.querySelector('.services-dropdown-toggle');
    var closeTimer;
    function setOpen(isOpen) { dropdown.classList.toggle('is-open', isOpen); toggle.setAttribute('aria-expanded', String(isOpen)); }
    function cancelClose() { window.clearTimeout(closeTimer); }
    function scheduleClose() { cancelClose(); closeTimer = window.setTimeout(function () { setOpen(false); }, 110); }
    toggle.addEventListener('click', function () { cancelClose(); setOpen(!dropdown.classList.contains('is-open')); });
    toggle.addEventListener('keydown', function (event) { if (event.key === 'Escape') { setOpen(false); toggle.focus(); } });
    dropdown.addEventListener('mouseenter', function () { cancelClose(); setOpen(true); });
    dropdown.addEventListener('mouseleave', scheduleClose);
    dropdown.addEventListener('focusin', function () { cancelClose(); setOpen(true); });
    dropdown.addEventListener('focusout', function () { window.setTimeout(function () { if (!dropdown.contains(document.activeElement)) setOpen(false); }, 0); });
    document.addEventListener('click', function (event) { if (!dropdown.contains(event.target)) setOpen(false); });
  });
});
