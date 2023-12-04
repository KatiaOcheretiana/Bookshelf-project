import axios from 'axios';

export const BASEURL = 'https://books-backend.p.goit.global/books/';

export async function getBookCategory() {
  const URL = `${BASEURL}category-list`;
  const response = await axios.get(URL);
  return response.data;
}

export async function getBestBook() {
  const URL = `${BASEURL}top-books`;
  const response = await axios.get(URL);
  return response.data;
}

export async function getCategoryByBook(category) {
  const URL = `${BASEURL}category?category=${category}`;
  const response = await axios.get(URL);
  return response.data;
}


