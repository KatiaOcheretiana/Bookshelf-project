import{K as H,N as l}from"./modal-local-storage-0a4c78ad.js";const t={ShopUlEl:document.querySelector(".shopping-list-container"),ShopStubEl:document.querySelector(".shopping-list-container"),shopRemoveBtnEl:document.querySelector(".shopping-delete-btn")},m="/Bookshelf-project/assets/oooops-mob-1x-b0b9c805.png",x="/Bookshelf-project/assets/oooops-mob-2x-5c7a8c33.png",g="/Bookshelf-project/assets/oooops-tab-1x-aa5b2255.png",c="/Bookshelf-project/assets/oooops-tab-2x-6e7faaa3.png",e="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAUCAMAAADiKH4mAAABJlBMVEUAAAAhHx8iICAhHx8hHh4hHh4hHx8gHh4zLS0gHh4gHh4eHR0hHh4iHh4hHh4iICAhHx8jHR0hHh4iHR0hHh7/mQAhHh4hHh4hHh4iHx8hHh7/mgAXFxciHh7/mQD/mQAhHh4iHx8gHh4gHh4iHh4gHh4eHR0iHR0iHR0dHR3/kgAhHh7/mQAiHx8iHx8hHx8hHh4hHx//mgD/mQD/mgAfHx8hHBweHh7/nQAiHh7/mAAhHx8iHh4hHx8hHx//mQAiHx8iHh4iHx//mQAhHR3/mAD/lwD/lwD/mAD/mQD/mQAhHh7/mQAiHx//mQD/mAAjHx//lgAhHBz/oAAiHh7/mQD/mQD/mQD/mQD/mAD/mAD/mgD/lwD/mQD/pgD/mQAiHx//mQC61amYAAAAYHRSTlMAr+rnF/V0OQR+MA/NnHtYQyqVcGo8+O7Wp2QfDPvz3ZiIX1RLMyUbEwcF/vvy4t2ypHleVkgoIQvk1cfDvbqtj4N4ck9GKSUT+M6on52MUEA1LhDz6cO7tJSDaGVLFBQqCtAnAAACN0lEQVQ4y5WS51riQBiFDwYkMYkmQADpKB1FmmJ3XXsv2/vJ/d/EzpfHXX1Y1/L+SObLzDtzMjNQuIl4xQRQcxums2wit6weCrMymZkCkLudEsIARvvL8jLdGtx56UO4mye55AIabYtMV9OqrAP7KSreAA4DytBjSVJLAHEyoZq7AGy2QyEyBExwjQplS09d41JJfYiimkqlkuQ03pJbaUaqmCQ1kothwGr3gA12RE9F58mU48hsTrI9gionoagn2cnpGjfQnGBP9G54m5T4Td2MWtRE70LPc0taIfln1OKyKKBbpIMqaQBdRnSlVzEnyYCERUWgnwHvxQz0FXuRDHRJXYKMjwMXZEPpYcwEeozszd+tPgtE/uijDtNxI9BrEdnLO91W6r0+Ssr47X91ZbpwAt0irwFcB8Us2817PSpn09S4qI/pPbIhqWPIkIys2TUzz23oHW7iXl/JU5sLybGO6TFlJjRSC9sM2ILN/HSJnHmg40zm3o1ozpjuysZtlhgyL6zy3IyxsYlwmpSwD/VGJlaegtzAhFEB4sb+XWulHMuYeiaHRrN1/FPVQC5jlyo6cGtM63ANo46/HKziP2QvC75f8PAkR+t7eBzvyvP2/Cs8TbZY7GfxGMf94Y1/iGd4d+kXPg/HZ1gd7JycHg2KeJ7Dj77vF8/7Pw5lI1rZg/75+oJf+N7CpwFegrdT8AMWThb8gPW9YxXsC17Ir287RTGFD6dfvRZeh6S+ORgOht7RKp7hN+Ari9q5mpe0AAAAAElFTkSuQmCC",s="data:image/png;base64,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",o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAMAAACrZuH4AAABCFBMVEUAAAD+ngT5bxj8ghD+kQr8jAz8hw77fhP7cxn/ngL+mwX6dBj6exT8lAn5eBb6cBj6bxn9ngT7cRr8ngP9iA7+nAb6chj+mwX6cRj+nQX5eBX8lgn7ehX8lwn9lwf5eBX8mAb8mAf7dxj/dxj/lwD////+mAf6cxj+nQX7ehT7eBX6dRf+mgb6cRn9lQj9kQr7fRP7gBL8iQ79jQz8gxD9uXb9kwn8hg/+vXX+4839tHj9tnf/6tf9vYv8qGf8rWb9sWX9oCX8hCP/+PH/9+//58r+xX3+wG7+vmn+tF/+tVf8mEf7fhj/+/r+48H9uIX8qmb9u2L7m1T9sEr9sEf9oDL7hyn9mRZRuK/XAAAAJXRSTlMAfn6+vb6+vSgn3dy8uJV9eHdgYC/68fDR0LavrpWTU1JKSSAgTsgx8wAAATRJREFUOMutytd2gkAQgGESe6/pvWzimgLqKoJgAvaS3t7/TTLgzoYc4M7/AGeY+aQ1lqqUNryVKqn/972av/SlB+zUgtqqCpG+DS6N4PQqrDMujkPFERe5e6eft8n0w50+p5O55U4HXEQ70HhAoJHVsZ4JNBg7yxwKWZbnZNVINvg0g23UI7qE94VD1yNirVZLiJkQsPWKNh4evSKGotls+kUbtijioSKOQlVVIR6EgC2KiMpYgGBMjaBgjPV8ogdbIRqNhhCvQsAWRQJmnZChpsGhT8iToQ0J0WGbQKEoiq4tlopimyBMG/4Xhg5fFFlK6feSupn9F2U12fBmuTiktE6xdz7WnWefi3w9rDwX5zdhnUi8zHVwGQmrBoPtpCS6yNz52+WAlywXC5t/FYpluK+tX3sicG9Acf+SAAAAAElFTkSuQmCC",r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABACAMAAACZQlHRAAABnlBMVEUAAAD+ngT6cBn+hw/9jgv8gRH7ihL+kwn8fBP1fw38iA78hw7/ngP/kQD+mwX6chj6chn+nQT6cRj+ngT6chj+ngT5chn6dBf6cRr+ngT7cBr+ngT+nAX6cBr+nwX6cxf/mgf8cRn+nQX7fBX8lAn8lQj7cRn/ngT/jQn7dRf6dhb9mAf8lwj7eBf+nQb/mwb5cxf6dxf9mwf5exf8exT////6dhf7fBT6chn+nQX+mAf7eRX+mgb9lgj9lAn7eBb6dxb9lwj9kgn6dBj/+PH6cxj+mwb8hBD8ig37fRP9kAv8iA77gBP7ghH8hhD7gRL8jA39jgz9jQz9kQr8hw/+ngX9tnX9sXX9uXT7ewz8hAr9r3b9s3X8fwz8hwn+q0X+pjz7dw/7eQ79igj/9Of/7N7/6NP+0p39v4/+x4X8l0f7iDL9lxL8gQv//Pn/7NX+yaH+unP9q279jQj/9+z/58z+5MP+2Lz9von8rnT+uW/8nlH8mkz9ozD7fhv9lQ3+7+L+2sD+0rH+0Kv+zqn9wpj9t4H+wX/+tmL+tWF1327eAAAANXRSTlMA+/xbXFsHW1sZPiIbBPTz2djU0r+1sx359urowJeWdHNgX1ZWTkZFDvjPzcrIroSDbWtPTWa+3mIAAAKMSURBVFjD7c9nUxpRGIbhTdRVwK5g7zW9kg0hAbPZNIymgQ2VIkWKVEtiTS//OuB7BE7ZyTnM+M37A+Xl4ZpZ6aLzS54aNLf19fRc0qu5r8M8OCXrC6MdNo+tmMcD76VvxU+FFw+cOkab2ECj2cbdTQNTaLMJ1NZIC9P9L4Tqp59l+LFgt0jB0CxKNJOPcveRcMMEcU2cuI4L8tMqkjHC9KSKTBhhxH90nCSTqgO7OJLJExVfGTFiwlFOPYrthrTtdNSnlk6+aHpbC+3GjuAETWDEeBnwR6xnpf3wD3+4dNrxlZFxjKhXz4paK8sWT79TladoaVrPJmJWPJ+q+jT8FGMTtR+hfIggIi7XDnEK5dGYIFzQhmYl8vvJi5ZHY17iz1+K2GAT7yGa2N+nCTSuxYkP0DpFZLMUsY7GBPEOoomlJZpAY4J4BfERaMwmVniIFTSuwYiaKohZgpiFGMQCTcBWh9iiiAVuwj3vLsZFbLkhgpiH1rgINCaIlxAXsYbGOFGnT6xyE3On12WKWOUm5iAuYhmNCeItxCAWaQKN63DiDUQTiwwCjdlEkIcIsonXEBDh75ufNjORSiKSKZx+fAECjXGiAV0DBeLbwfHpZyX+tfAHb5HYO1TgdLBXIAJo3IATChTQwnG7UupzqkikfinlDsNaQIEoAoofKxAyrF6vNRfEbnGFSYwp7Ow/vd6MXWE3hhH37TolcrmEXad7GGHUmwUSCaddJyNGmJxUM87/ZcIIeUYkJ7zJEtaNB8JdlfCGxIk7BGFoERWuGCSi288EG5LImjqfC9U5LVF1tT4UqLVLYmSw8AsWEKiaRtr5gPYRSTd5cqCzvbel+7JO3S29rZaBSVm66Nz6BwnRjMqJHEjPAAAAAElFTkSuQmCC",d="/Bookshelf-project/assets/symbol-defs-c8f30ebc.svg#icon-delete";function Q(A){const n=A.map(h=>`<li class="shopping-item">
      <div class="shopping-list-item">
        
          <img
            class="shopping-book-img"
            src="${h.book_image}"
            alt="${h.title}"
            width="100"
            height="142"
          />
          

    <div class="shopping-item-container">
      <h3 class="shopping-book-title">${h.title}</h3>

      <p class="shopping-book-category-text">${h.list_name}</p>

      <p class="shopping-book-description">${h.description}</p>

      <p class="shopping-book-author">${h.author}</p>

      <div class="shopping-link-wrap">
        <a
          href="${h.buy_links[0].url}"
          target="_blank"
          rel="noopener noreferrer"
          class="shopping-link"
        >
          <picture class="picture-amazon">
            <source
              srcset="
                ${e},
                ${s}
              "
              media="(min-width: 1440px)"
            />
            <source
              srcset="
                ${e},
                ${s}
              "
              media="(min-width: 768px)"
            />
            <source
              srcset="
                ${e},
                ${s}
              "
              media="(max-width: 768px)"
            />
            <img
              class="shopping-img-amazon"
              src="${e}"
              alt="amazon"
              width="32"
              height="11"
            />
          </picture>
        </a>
        <a
          href="${h.buy_links[1].url}"
          target="_blank"
          rel="noopener noreferrer"
          class="shopping-link"
        >
          <picture class="picture-book">
            <source
              srcset="
              ${o}, 
              ${r}"
              media="(min-width: 1440px)"
            />
            <source
              srcset="
              ${o}, 
              ${r}"
              media="(min-width: 768px)"
            />
            <source
              srcset="
              ${o}, 
              ${r}"
              media="(max-width: 768px)"
            />
            <img
              class="shopping-img-book"
              src="${o}"
              alt="book"
              width="11"
              height="11"
            />
          </picture>
        </a>
      </div>
    </div>
  </div>
  <button class="shopping-delete-btn" type="button" data-id="${h._id}">
    <svg class="shopping-delete-btn-icon" width="16" height="16">
      <use href="${d}" ></use>
    </svg>
  </button>
</li>
`).join("");t.ShopUlEl.insertAdjacentHTML("beforeend",n)}function f(){const A=`<li class="shopping-error-wrap">
      <p class="shopping-error-text">
        This page is empty, add some books and proceed to order.
      </p>
      
        <picture>
          <source
            srcset="
              ${g},
              ${c}
            "
            media="(min-width: 1440px)"
          />
          <source
            srcset="
              ${g},
              ${c}
            "
            media="(min-width: 768px)"
          />
          <source
            srcset="
              ${m},
              ${x}
            "
            media="(max-width: 768px)"
          />
          <img
        class="shopping-error-img"
        src="${m}"
        alt="books"
        width="265"
        height="198"
      />
        </picture>
    </li>`;t.ShopStubEl.innerHTML=A}let i=JSON.parse(localStorage.getItem(H))||[];t.ShopUlEl.addEventListener("click",w);a();function a(){try{if(i.length===0){f(i);return}Q(i)}catch(A){console.error("Error:",A),l.Notify.failure("Sorry, there are no images matching your search query. Please try again.")}}function w(A){if(!A.target.classList.contains("shopping-delete-btn"))return;A.target.closest("li.shopping-item");const n=A.target.dataset.id,h=i.findIndex(p=>p._id===n);h!==-1&&(i.splice(h,1),localStorage.setItem(H,JSON.stringify(i)),t.ShopStubEl.innerHTML="",a())}
