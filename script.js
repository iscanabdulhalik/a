document.addEventListener('DOMContentLoaded', () => {
    // 1. Splash Screen Logic
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 2000); // 2 second display time

    // 2. Render Menu
    renderMenu();

    // 3. Scroll Animations (Intersection Observer)
    initScrollAnimations();
});

function renderMenu() {
    const data = getMenuData();
    
    // Set Header/Footer Text
    document.getElementById('restaurant-name').textContent = data.settings.restaurantName || "CALYPSO";
    document.getElementById('footer-text').textContent = data.settings.footerText || "AFİYET OLSUN";

    renderCategoriesGrid(data);
}

function renderCategoriesGrid(data) {
    const gridContainer = document.getElementById('categories-grid');
    const menuContainer = document.getElementById('menu-container');
    
    gridContainer.innerHTML = '';
    gridContainer.style.display = 'grid'; // Layout handled in CSS
    menuContainer.style.display = 'none';

    data.categories.forEach((category) => {
        if (!category.items || category.items.length === 0) return;

        // Try to find the first image in items to use as category cover
        let categoryImage = 'header-bg.png'; // default
        for (let item of category.items) {
            if (item.image) {
                categoryImage = item.image;
                break;
            }
        }

        const card = document.createElement('div');
        card.className = 'category-card';
        card.style.backgroundImage = `url('${categoryImage}')`;
        card.innerHTML = `<div class="category-card-overlay"><span class="category-card-title">${category.name}</span></div>`;

        card.addEventListener('click', () => {
             renderCategoryDetail(data, category);
             // Scroll exactly to top of the menu section
             const headerOffset = document.querySelector('.header').offsetHeight;
             window.scrollTo({ top: headerOffset, behavior: 'smooth' });
        });

        gridContainer.appendChild(card);
    });
}

function renderCategoryDetail(data, category) {
    const gridContainer = document.getElementById('categories-grid');
    const menuContainer = document.getElementById('menu-container');
    
    gridContainer.style.display = 'none';
    menuContainer.style.display = 'block';
    menuContainer.innerHTML = '';

    // Back Button Container
    const backBtnContainer = document.createElement('div');
    backBtnContainer.className = 'back-btn-container';
    
    const backBtn = document.createElement('button');
    backBtn.className = 'back-btn';
    backBtn.innerHTML = '← Kategorilere Dön';
    backBtn.onclick = () => {
        renderCategoriesGrid(data);
        const headerOffset = document.querySelector('.header').offsetHeight;
        window.scrollTo({ top: headerOffset, behavior: 'smooth' });
    };
    
    backBtnContainer.appendChild(backBtn);
    menuContainer.appendChild(backBtnContainer);

    // Title
    const catTitle = document.createElement('h2');
    catTitle.className = 'category-title';
    catTitle.textContent = category.name;
    menuContainer.appendChild(catTitle);

    // Items
    category.items.forEach(item => {
        const wrapper = document.createElement('div');
        wrapper.className = 'menu-item-wrapper';

        const itemDiv = document.createElement('div');
        itemDiv.className = 'menu-item';

        const itemContent = document.createElement('div');
        itemContent.className = 'item-content';

        const itemHeader = document.createElement('div');
        itemHeader.className = 'item-header';

        const itemName = document.createElement('h3');
        itemName.className = 'item-name';
        itemName.textContent = item.name;

        const itemLine = document.createElement('div');
        itemLine.className = 'item-line';

        const itemPrice = document.createElement('span');
        itemPrice.className = 'item-price';
        itemPrice.textContent = item.price;

        itemHeader.appendChild(itemName);
        itemHeader.appendChild(itemLine);
        itemHeader.appendChild(itemPrice);
        itemContent.appendChild(itemHeader);

        if (item.description) {
            const itemDesc = document.createElement('p');
            itemDesc.className = 'item-description';
            itemDesc.textContent = item.description;
            itemContent.appendChild(itemDesc);
        }

        itemDiv.appendChild(itemContent);

        if (item.image) {
            const imgContainer = document.createElement('div');
            imgContainer.className = 'image-container';

            const itemImg = document.createElement('img');
            itemImg.className = 'item-image';
            itemImg.src = item.image;
            itemImg.alt = item.name;
            itemImg.loading = "lazy";
            
            itemImg.onerror = function() { imgContainer.style.display = 'none'; };
            
            imgContainer.appendChild(itemImg);
            itemDiv.appendChild(imgContainer);
        }

        wrapper.appendChild(itemDiv);
        menuContainer.appendChild(wrapper);
    });

    initScrollAnimations();
}

function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.menu-item-wrapper');
    elementsToAnimate.forEach(el => observer.observe(el));
}
