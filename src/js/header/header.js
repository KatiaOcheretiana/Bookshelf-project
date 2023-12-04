const btnBurger = document.querySelector('#openBurger');
btnBurger.addEventListener('click', openPopup);
const btnClose = document.querySelector('#closeBurger');
btnClose.addEventListener('click', closePopup);

function openPopup() {
  document.getElementById('overlay').style.display = 'flex';
  toggleEl('.overlay');
  toggleEl('#openBurger');
  toggleEl('#closeBurger');
}
function toggleEl(selector) {
  const element = document.querySelector(selector);
  element.classList.toggle('active');
}

function closePopup() {
  document.getElementById('overlay').style.display = 'none';
  toggleEl('.overlay');
  toggleEl('#openBurger');

  toggleEl('#closeBurger');
}

// -=-==-=---=-=-=-=-=-=-= SCROLL=-=-=-=-=--=-=-=-=-===

document.addEventListener('DOMContentLoaded', function () {
  let html = document.querySelector('html');
  let openBurgerButton = document.querySelector('#openBurger');
  let closeBurgerButton = document.querySelector('#closeBurger');

  openBurgerButton.addEventListener('click', function () {
    html.classList.add('unscroll');
  });

  closeBurgerButton.addEventListener('click', function () {
    html.classList.remove('unscroll');
  });
});

// =--=-=-=-================================================================

const themePreference = () => {
  const hasLocalStorage = localStorage.getItem('theme');

  let supports = false;
  let theme = undefined;

  if (hasLocalStorage === 'light') {
    theme = 'light';
  }
  if (hasLocalStorage === 'dark') {
    theme = 'dark';
  }

  if (window.matchMedia(`(prefers-color-scheme: dark)`).matches) {
    theme = hasLocalStorage ? hasLocalStorage : 'dark';
    supports = true;
  }
  if (window.matchMedia(`(prefers-color-scheme: light)`).matches) {
    theme = hasLocalStorage ? hasLocalStorage : 'light';
    supports = true;
  }
  if (window.matchMedia(`(prefers-color-scheme: no-preference)`).matches) {
    theme = hasLocalStorage ? hasLocalStorage : 'none';
    supports = true;
  }

  return { supports, theme };
};

document.addEventListener(
  'DOMContentLoaded',
  e => {
    const userThemePreference = themePreference();
    const toggle = document.querySelector('.js-toggle');
    const clearStorage = document.querySelector('[js-clearStorage]');
    const html = document.documentElement;

    const setTheme = () => {
      switch (userThemePreference.theme) {
        case 'dark':
          toggle.checked = true;
          html.classList.add('dark');
          html.classList.remove('light');
          break;
        case 'light':
          toggle.checked = false;
          html.classList.remove('dark');
          html.classList.add('light');
          break;
      }
    };

    setTheme();

    toggle.addEventListener(
      'click',
      e => {
        if (toggle.checked) {
          html.classList.add('dark');
          html.classList.remove('light');
          localStorage.setItem('theme', 'dark');
        } else {
          html.classList.remove('dark');
          html.classList.add('light');
          localStorage.setItem('theme', 'light');
        }
      },
      false
    );
  },
  false
);
