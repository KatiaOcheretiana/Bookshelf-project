import axios from 'axios';

export async function fetchBookById(bookId) {
  const URL_ID = `https://books-backend.p.goit.global/books/${bookId}`;

  const response = await axios.get(URL_ID);

  const bookData = response.data;
  return bookData;
  
  // generateBookMarkup(bookData);
  // addLinkShop(bookData);
}
