import { products } from './utils.js'

const container = document.getElementById('container')
const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

function createCard() {
    products.forEach((product) => {
        const box = document.createElement('div')
        box.classList.add('box')
        const h3 = document.createElement('h3')
        const h4 = document.createElement('h4')
        const imgBox = document.createElement('div')
        const a = document.createElement('a')
        const img = document.createElement('img')

        h3.textContent = `${product.id}`
        h3.id = product.id
        h4.textContent = `${product.name}`
        imgBox.classList.add('img-box')
        a.href = product.link
        a.target = '_blank'
        img.src = `./src/assets/images/${product.photo}`
        a.appendChild(img)
        imgBox.appendChild(a)
        box.appendChild(h3)
        box.appendChild(h4)
        box.appendChild(imgBox) 

        container.appendChild(box)
    })  
}

function init() {
    createCard()
}

init()

navToggle.addEventListener('click', function () { 
    links.classList.toggle
    ('show-links')
})

document.querySelectorAll('.links li').forEach((li) => {
    li.addEventListener('click', () => {
        links.classList.remove('show-links')
    })
})
