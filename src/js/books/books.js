import { categorySelectors } from '../category/category-selectors';
import { createBookByCategory } from './book-by-category';
import {makeAllCategoriesContent} from './all-category-content'
import { booksSelectors } from './books-selectors';
import { openAllCategoryHandle } from './book-by-category';


makeAllCategoriesContent();


categorySelectors.categoryList.addEventListener('click', createBookByCategory);

booksSelectors.onlyBooksContent.addEventListener('click', openAllCategoryHandle)

