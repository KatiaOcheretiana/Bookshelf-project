export function getMarkupBestBooks(bookData) {
  const maxBookNameLength = 16;
  const maxAuthorName = 32;
  const markup = bookData
    .map(item => {
      return `
        <div class="category-box">
            <h2 class="category-name">${item.list_name}</h2>
            <ul class="book-list">
                ${item.books
                  .slice(0, 5)
                  .map(
                    book => `
                    <li class="book-card" data-id="${book._id}">
                    <div class="home-book-overlay">
                        <img class="photo-card" src="${book.book_image}" alt="${
                      book.title
                    }" />
                              <p class="home-book-overlay-text">quick view</p>
                     </div>
                        <h3 class="book-name">${truncateBookName(
                          book.title,
                          maxBookNameLength
                        )}</h3>
                        <p class="book-author">${truncateBookName(
                          book.author,
                          maxAuthorName
                        )}</p>
                    </li>`
                  )
                  .join('')}
            </ul>
            <button class="btn-book-open-category" data-title="${
              item.list_name
            }">see more</button>
        </div>
        `;
    })
    .join('');

  return markup;
}

export function getMarkupByCategory(data) {
  const maxBookNameLength = 16;
  const maxAuthorName = 32;

  const markup = data
    .map(item => {
      return `
        <li class="book-item" data-id="${item._id}">
        <div class="home-book-overlay">
          <img class="photo-card" src="${item.book_image}" alt="${
        item.title
      }" />
          <p class="home-book-overlay-text">quick view</p>
         </div>
          <h3 class="book-name">${truncateBookName(
            item.title,
            maxBookNameLength
          )}</h3>
          <p class="book-author">${truncateBookName(
            item.author,
            maxAuthorName
          )}</p>
        </li>`;
    })
    .join('');
  return markup;
}

export function truncateBookName(bookName, maxLength) {
  if (bookName.length > maxLength) {
    return `${bookName.slice(0, maxLength)}...`;
  }
  return bookName;
}
