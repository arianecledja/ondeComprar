import { products } from './utils.js'

const container = document.getElementById('container')
const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

navToggle.addEventListener('click', function () { 
    links.classList.toggle
    ('show-links')
})

function createCard() {
    products.forEach((product) => {
        const box = document.createElement('div')
        box.classList.add('box')
    
        box.innerHTML += `
            <h3 id="${product.id}">${product.id}</h3>
            <h4>${product.name}</h4 
            <a href="${product.link}"
                target="_blank">
                <img src="./src/assets/images/${product.photo}" alt="${product.description}">
            </a>  
        ` 

        container.appendChild(box)
        console.log(box);
    })
    
}

function init() {
    createCard()
}

init()

