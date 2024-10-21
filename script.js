
const categories = [
    { image: 'image/Category-CellPhone.png', name: 'Phones' },
    { image: 'image/Category-Computer.png', name: 'Computers' },
    { image: 'image/Category-SmartWatch.png', name: 'Smart Watch' },
    { image: 'image/Category-Headphone.png', name: 'Headphones' },
    { image: 'image/Category-Gamepad (1).png', name: 'Gaming' },
    { image: 'image/Group 1000005941.png', name: 'Camera' },
];

function renderCategories() {
    const categoryList = document.querySelector('.Category-list');
    categories.forEach(category => {
        const categoryItem = document.createElement('div');
        categoryItem.classList.add('Category-item');

        const img = document.createElement('img');
        img.src = category.image;

        const p = document.createElement('p');
        p.textContent = category.name;

        categoryItem.appendChild(img);
        categoryItem.appendChild(p);
        categoryList.appendChild(categoryItem);
    });
}

document.addEventListener('DOMContentLoaded', renderCategories);


document.addEventListener("DOMContentLoaded", () => {
    fetch('product.json')
        .then(response => response.json())
        .then(data => {
            renderProducts(data);
        })
        .catch(error => console.error('Error fetching the JSON:', error));
});

function renderProducts(products) {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = ''; 
    products.forEach(product => {
        const productItem = document.createElement('a');
        productItem.classList.add('product-items');
        const roundImage = product.roundImage;

        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.title}"/>
            <div class="position-vector">
                <img src="${product.vector}" alt="Vector Icon"/>
            </div>
            <div class="position-vector2">
                <img src="${product.quickView}" alt="Quick View"/>
            </div>
            <div class="bottom-items">
                <h3>${product.title}</h3>
                <ul>
                    <li>${product.price}</li>
                    <li><img src="image/Vector (2).svg" alt="Rating Star"/></li>
                    <li><img src="image/Vector (2).svg" alt="Rating Star"/></li>
                    <li><img src="image/Vector (2).svg" alt="Rating Star"/></li>
                    <li><img src="image/Vector (3).svg" alt="Rating Star"/></li>
                    <li><img src="image/Vector (3).svg" alt="Rating Star"/></li>
                    <li>(${product.ratings})</li>
                </ul>
            </div>
            <button class="add-to-cart">Add to Cart</button>
        `;
        if (roundImage) {
            productItem.innerHTML += `
                <div class="round">
                    <img src="${roundImage}" class="rond-img" alt="Round Image"/>
                </div>
            `;
        }

        productGrid.appendChild(productItem);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.navlinks');
    if (menuIcon && navLinks) {
        menuIcon.addEventListener('click', () => {
            navLinks.classList.toggle('is-active');
        });
    } else {
        console.error("Menu icon or navigation links not found.");
    }
});


