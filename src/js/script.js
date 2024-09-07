// Hamburger Open
let hamBtnOpen = document.querySelector('.js-ham-btn-open');
hamBtnOpen.addEventListener('click', hamOpen);
function hamOpen() {
  let hamIsOpen = document.querySelector('.js-ham');
  hamIsOpen.classList.replace('hidden', 'wave-in');
};

// Hamburger Close
let hamBtnClose = document.querySelector('.js-ham-btn-close');
hamBtnClose.addEventListener('click', hamClose);
function hamClose() {
  let hamIsClose = document.querySelector('.js-ham');
  hamIsClose.classList.replace('wave-in', 'wave-out');
  setTimeout(timer, 300);
    function timer() {
      hamIsClose.classList.replace('wave-out', 'hidden');
    }
};

// Page Loader
function pageLoader(value) {
  let pageOpen = document.querySelector('.' + value);
  let pageReset = document.querySelectorAll('.js-page');
  pageReset.forEach(function(page) {
    hamClose();
    page.classList.replace('visible', 'hidden');
  });
  pageOpen.classList.replace('hidden', 'visible');
};