import { getBookCategory } from './api-requests';
import { categorySelectors } from './category-selectors';
import { categoryMarkup } from './category-markup';

(async () => {
  try {
    const categoryData = await getBookCategory();
    const markup = categoryMarkup(categoryData);
    categorySelectors.categoryList.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    console.log(error);
  }
})();
