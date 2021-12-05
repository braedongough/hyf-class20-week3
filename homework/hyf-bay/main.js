const products = getAvailableProducts()
const productsUl = document.querySelector('section.products ul')

const searchInput = document.querySelector('#search')
const sortSelect = document.querySelector('.sort select')

function renderProducts(products) {
  products.forEach((product) => {
    const li = document.createElement('li')

    let shipsToHTML = ''
    product.shipsTo.forEach((country) => (shipsToHTML += `<li>${country}</li>`))

    li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `
    productsUl.appendChild(li)
  })
}

searchInput.addEventListener('input', () => {
  productsUl.innerHTML = ''

  const filteredProducts = products.filter((product) => {
    const name = product.name.toLowerCase()

    const value = searchInput.value.toLowerCase()

    return name.includes(value)
  })

  renderProducts(filteredProducts)
})

sortSelect.addEventListener('change', () => {
  const options = sortSelect.options
  const selectedValue = options[options.selectedIndex].value

  products.sort((productA, productB) => {
    const priceA = productA.price
    const priceB = productB.price

    if (selectedValue === 'expensive') {
      return priceB - priceA
    } else if (selectedValue === 'cheap') {
      return priceA - priceB
    } else if (selectedValue === 'name') {
      return productA.name.toLowerCase() > productB.name.toLowerCase()
    }
  })

  renderProducts(products)
})

renderProducts(products)
