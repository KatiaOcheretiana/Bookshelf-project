const modalInformation = document.querySelector('.modal-information');
const containerImg = document.querySelector('.containerImg');
const amazonLinkRef = document.querySelector('.modal-amazon-link');
const appleBookLinkRef = document.querySelector('.modal-applebook-link');


export function generateBookMarkup(bookData) {
   const testMarkupImg = `
    <img class="modal-book-image" src="${bookData.book_image}" alt="${bookData.title}"/>
  `;
  containerImg.innerHTML = testMarkupImg;

  const testMarkup = `
    <div class="modal-box">
    <h3 class="modal-book-title">${bookData.title}</h3>
    <p class="modal-author">Author: ${bookData.author}</p>
    <p class="modal-description">${bookData.description}</p>
    </div>
  `;
  modalInformation.innerHTML = testMarkup;

    const amazon = bookData.buy_links.find(link => link.name === 'Amazon')?.url;
    const appleBook = bookData.buy_links.find(
    link => link.name === 'Apple Books'
  )?.url;

  amazonLinkRef.setAttribute('href', amazon);
  appleBookLinkRef.setAttribute('href', appleBook);
  return { amazon, appleBook };
}

// export function addLinkShop(bookData) {
//   const amazon = bookData.buy_links.find(link => link.name === 'Amazon')?.url;
//   const appleBook = bookData.buy_links.find(
//     link => link.name === 'Apple Books'
//   )?.url;

//   amazonLinkRef.setAttribute('href', amazon);
//   appleBookLinkRef.setAttribute('href', appleBook);
//   return { amazon, appleBook };
// }
