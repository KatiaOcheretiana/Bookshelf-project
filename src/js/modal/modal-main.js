import { fetchBookById } from './modal-api';
import { generateBookMarkup } from './modal-bookmarkup';
import { saveBookToStorage } from './modal-local-storage';

const modal = document.querySelector('modal-section');
const buttonAddToBasket = document.querySelector('.add-btn');
const buttonRemoveToBasket = document.querySelector('.remove-btn');
const greetMessage = document.querySelector('.modal-message');
let currentBookData = []; // Зробили змінну глобальною

document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', async function (event) {
    const closestLi =
      event.target.closest('li.book-item') ||
      event.target.closest('li.book-card');

    if (closestLi) {
      const bookId = closestLi.dataset.id;

      try {
        currentBookData = await fetchBookById(bookId);
        generateBookMarkup(currentBookData);
        openModal();

        updateButtonsVisibility();

        // Check if the book is in storage and update button visibility
        buttonAddToBasket.addEventListener('click', handleAddToBasketClick);
        buttonRemoveToBasket.addEventListener(
          'click',
          handleRemoveFromBasketClick
        );
      } catch (error) {
        console.error('Error:', error);
      }
    }
  });
  // Function to handle the "Add to Shopping List" button click
  function handleAddToBasketClick() {
    addToLocalStorage(currentBookData);
    updateButtonsVisibility();
  }

  // Function to handle the "Remove from Shopping List" button click
  function handleRemoveFromBasketClick() {
    removeBookFromStorage(currentBookData);
    updateButtonsVisibility();
  }

  const closeIcon = document.querySelector('.modal-icon-x-close');
  closeIcon.addEventListener('click', closeModal);

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  });

  document.addEventListener('click', function (event) {
    if (!event.target.closest('.modal-container')) {
      closeModal();
    }
  });

  // Перевірка при завантаженні сторінки
  updateButtonsVisibility();

  // Оновлення видимості кнопок при зміні локального сховища
  window.addEventListener('storage', function (event) {
    if (event.key === 'storedBooks') {
      updateButtonsVisibility();
    }
  });

  buttonRemoveToBasket.addEventListener('click', function () {
    const storedBooks = JSON.parse(localStorage.getItem('storedBooks')) || [];
    const indexToRemove = storedBooks.findIndex(
      book => book._id === currentBookData._id
    );

    if (indexToRemove !== -1) {
      storedBooks.splice(indexToRemove, 1);
      localStorage.setItem('storedBooks', JSON.stringify(storedBooks));

      // Оновлення видимості кнопок після видалення книги
      updateButtonsVisibility();
    }
  });
});

function openModal() {
  const modal = document.querySelector('.modal-section');
  modal.style.display = 'flex';
  modal?.classList.remove('visually-hidden');
  document.body.style.overflow = 'hidden'; // Забороняємо прокрутку фонового контенту
}

function closeModal() {
  const modal = document.querySelector('.modal-section');
  modal.style.display = 'none';
  modal?.classList.add('visually-hidden');
  document.body.style.overflow = ''; // Відновлюємо можливість прокрутки фонового контенту
}

async function addToLocalStorage(bookData) {
  await saveBookToStorage(bookData);

  // Book is added to storage, update buttons
  updateButtonsVisibility();
}

async function removeBookFromStorage(bookData) {
  const storedBooks = JSON.parse(localStorage.getItem('storedBooks')) || [];
  const indexToRemove = storedBooks.findIndex(
    book => book._id === bookData._id
  );

  if (indexToRemove !== -1) {
    storedBooks.splice(indexToRemove, 1);
    localStorage.setItem('storedBooks', JSON.stringify(storedBooks));
  }
}

function updateButtonsVisibility() {
  const storedBooks = JSON.parse(localStorage.getItem('storedBooks')) || [];
  const isBookInStorage = storedBooks.some(
    book => book._id === currentBookData._id
  );

  if (isBookInStorage) {
    buttonAddToBasket.classList.add('visually-hidden');
    buttonRemoveToBasket.classList.remove('visually-hidden');
    greetMessage.classList.remove('visually-hidden');
  } else {
    buttonAddToBasket.classList.remove('visually-hidden');
    buttonRemoveToBasket.classList.add('visually-hidden');
    greetMessage.classList.add('visually-hidden');
  }
}
