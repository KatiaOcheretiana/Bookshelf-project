export const KEY = 'storedBooks';

export function saveBookToStorage(bookData) {
  const storedBooks = JSON.parse(localStorage.getItem(KEY)) || [];

  storedBooks.push(bookData);

  localStorage.setItem(KEY, JSON.stringify(storedBooks));
}
