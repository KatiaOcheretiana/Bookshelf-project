import { selectors } from './basket-selectors';

import oooopsMob1x from '../../img/images/oooops-mob-1x.png';
import oooopsMob2x from '../../img/images/oooops-mob-2x.png';
import oooopsTab1x from '../../img/images/oooops-tab-1x.png';
import oooopsTab2x from '../../img/images/oooops-tab-2x.png';

import amazon1x from '../../img/images/amazon-1x.png';
import amazon2x from '../../img/images/amazon-2x.png';
import book1x from '../../img/images/book-1x.png';
import book2x from '../../img/images/book-2x.png';

import iconDelete from '../../img/icons/symbol-defs.svg#icon-delete';

export function shopCardMarkup(bookData) {
  const cardItem = bookData
    .map(book => {
      return `<li class="shopping-item">
      <div class="shopping-list-item">
        
          <img
            class="shopping-book-img"
            src="${book.book_image}"
            alt="${book.title}"
            width="100"
            height="142"
          />
          

    <div class="shopping-item-container">
      <h3 class="shopping-book-title">${book.title}</h3>

      <p class="shopping-book-category-text">${book.list_name}</p>

      <p class="shopping-book-description">${book.description}</p>

      <p class="shopping-book-author">${book.author}</p>

      <div class="shopping-link-wrap">
        <a
          href="${book.buy_links[0].url}"
          target="_blank"
          rel="noopener noreferrer"
          class="shopping-link"
        >
          <picture class="picture-amazon">
            <source
              srcset="
                ${amazon1x},
                ${amazon2x}
              "
              media="(min-width: 1440px)"
            />
            <source
              srcset="
                ${amazon1x},
                ${amazon2x}
              "
              media="(min-width: 768px)"
            />
            <source
              srcset="
                ${amazon1x},
                ${amazon2x}
              "
              media="(max-width: 768px)"
            />
            <img
              class="shopping-img-amazon"
              src="${amazon1x}"
              alt="amazon"
              width="32"
              height="11"
            />
          </picture>
        </a>
        <a
          href="${book.buy_links[1].url}"
          target="_blank"
          rel="noopener noreferrer"
          class="shopping-link"
        >
          <picture class="picture-book">
            <source
              srcset="
              ${book1x}, 
              ${book2x}"
              media="(min-width: 1440px)"
            />
            <source
              srcset="
              ${book1x}, 
              ${book2x}"
              media="(min-width: 768px)"
            />
            <source
              srcset="
              ${book1x}, 
              ${book2x}"
              media="(max-width: 768px)"
            />
            <img
              class="shopping-img-book"
              src="${book1x}"
              alt="book"
              width="11"
              height="11"
            />
          </picture>
        </a>
      </div>
    </div>
  </div>
  <button class="shopping-delete-btn" type="button" data-id="${book._id}">
    <svg class="shopping-delete-btn-icon" width="16" height="16">
      <use href="${iconDelete}" ></use>
    </svg>
  </button>
</li>
`;
    })
    .join('');
  selectors.ShopUlEl.insertAdjacentHTML('beforeend', cardItem);
}

export function onErrorStubMarkup() {
  const stubItem = `<li class="shopping-error-wrap">
      <p class="shopping-error-text">
        This page is empty, add some books and proceed to order.
      </p>
      
        <picture>
          <source
            srcset="
              ${oooopsTab1x},
              ${oooopsTab2x}
            "
            media="(min-width: 1440px)"
          />
          <source
            srcset="
              ${oooopsTab1x},
              ${oooopsTab2x}
            "
            media="(min-width: 768px)"
          />
          <source
            srcset="
              ${oooopsMob1x},
              ${oooopsMob2x}
            "
            media="(max-width: 768px)"
          />
          <img
        class="shopping-error-img"
        src="${oooopsMob1x}"
        alt="books"
        width="265"
        height="198"
      />
        </picture>
    </li>`;
  selectors.ShopStubEl.innerHTML = stubItem;
}

// let currentPage = 1;

// let options = {
//   root: document.querySelector('#scrollArea'),
//   rootMargin: '200px',
//   threshold: 1.0,
// };

// let observer = new IntersectionObserver(onLoad, options);
// observer.observe(selectors.targetEl);
// function onLoad(entries, observer) {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       currentPage += 1;
//       shopCardMarkup(evt);
//       if (saveCardArr.length) {
//         observer.unobserve(selectors.targetEl);
//       }
//     }
//   });
// }
