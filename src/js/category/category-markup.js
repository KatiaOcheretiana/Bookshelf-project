export function categoryMarkup(data) {
    const result = data.map(item => `<li class='category-item'>${item.list_name}</li>`   
    ).join('')
     return result
}