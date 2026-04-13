document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 2000);

    renderMenu();
    initScrollAnimations();
    initRevealAnimations();
});

function renderMenu() {
    const data = getMenuData();
    document.getElementById('restaurant-name').textContent = data.settings.restaurantName || "CALYPSO";
    document.getElementById('footer-text').textContent = data.settings.footerText || "AFİYET OLSUN";
    renderCategoriesGrid(data);
}

function renderCategoriesGrid(data) {
    const gridContainer = document.getElementById('categories-grid');
    const menuContainer = document.getElementById('menu-container');

    gridContainer.innerHTML = '';
    gridContainer.style.display = 'grid';
    menuContainer.style.display = 'none';

    data.categories.forEach((category) => {
        if (!category.items || category.items.length === 0) return;

        let categoryImage = 'header-bg.png';
        for (let item of category.items) {
            if (item.image) { categoryImage = item.image; break; }
        }

        const card = document.createElement('div');
        card.className = 'category-card';

        // Separate bg div for parallax-like zoom
        const bgDiv = document.createElement('div');
        bgDiv.className = 'category-card-bg';
        bgDiv.style.backgroundImage = `url('${categoryImage}')`;

        const overlay = document.createElement('div');
        overlay.className = 'category-card-overlay';

        const titleSpan = document.createElement('span');
        titleSpan.className = 'category-card-title';
        titleSpan.textContent = category.name;

        const arrowSpan = document.createElement('span');
        arrowSpan.className = 'category-card-arrow';
        arrowSpan.textContent = 'KEŞFET →';

        overlay.appendChild(titleSpan);
        overlay.appendChild(arrowSpan);
        card.appendChild(bgDiv);
        card.appendChild(overlay);

        card.addEventListener('click', () => {
            card.style.transition = 'transform 0.18s ease, opacity 0.18s ease';
            card.style.transform = 'scale(0.97)';
            card.style.opacity = '0.7';
            setTimeout(() => {
                renderCategoryDetail(data, category);
                const headerOffset = document.querySelector('.header').offsetHeight;
                window.scrollTo({ top: headerOffset, behavior: 'smooth' });
            }, 160);
        });

        // Touch ripple feedback
        card.addEventListener('touchstart', () => {
            card.style.transition = 'transform 0.1s ease';
            card.style.transform = 'scale(0.97)';
        }, { passive: true });
        card.addEventListener('touchend', () => {
            card.style.transition = 'transform 0.3s ease';
            card.style.transform = 'scale(1)';
        }, { passive: true });

        gridContainer.appendChild(card);
    });
}

function renderCategoryDetail(data, category) {
    const gridContainer = document.getElementById('categories-grid');
    const menuContainer = document.getElementById('menu-container');

    // Animate grid out
    gridContainer.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
    gridContainer.style.opacity = '0';
    gridContainer.style.transform = 'translateX(-16px)';

    setTimeout(() => {
        gridContainer.style.display = 'none';
        gridContainer.style.opacity = '';
        gridContainer.style.transform = '';
        gridContainer.style.transition = '';

        menuContainer.style.display = 'block';
        menuContainer.innerHTML = '';

        // Back Button
        const backBtnContainer = document.createElement('div');
        backBtnContainer.className = 'back-btn-container';

        const backBtn = document.createElement('button');
        backBtn.className = 'back-btn';
        backBtn.innerHTML = '<span>← Kategorilere Dön</span>';
        backBtn.onclick = () => {
            menuContainer.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
            menuContainer.style.opacity = '0';
            menuContainer.style.transform = 'translateX(16px)';
            setTimeout(() => {
                menuContainer.style.transition = '';
                menuContainer.style.opacity = '';
                menuContainer.style.transform = '';
                renderCategoriesGrid(data);
                const headerOffset = document.querySelector('.header').offsetHeight;
                window.scrollTo({ top: headerOffset, behavior: 'smooth' });
            }, 200);
        };

        backBtnContainer.appendChild(backBtn);
        menuContainer.appendChild(backBtnContainer);

        const catTitle = document.createElement('h2');
        catTitle.className = 'category-title';
        catTitle.textContent = category.name;
        menuContainer.appendChild(catTitle);

        category.items.forEach((item, index) => {
            const wrapper = document.createElement('div');
            wrapper.className = 'menu-item-wrapper';
            wrapper.style.transitionDelay = `${index * 0.06}s`;

            const itemDiv = document.createElement('div');
            itemDiv.className = 'menu-item';

            const itemContent = document.createElement('div');
            itemContent.className = 'item-content';

            const itemHeader = document.createElement('div');
            itemHeader.className = 'item-header';

            const itemName = document.createElement('h3');
            itemName.className = 'item-name';
            itemName.textContent = item.name;
            itemName.title = item.name;

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
            wrapper.appendChild(itemDiv);
            menuContainer.appendChild(wrapper);
        });

        initScrollAnimations();
    }, 250);
}

function initScrollAnimations() {
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { root: null, rootMargin: '0px 0px -40px 0px', threshold: 0.08 });

    document.querySelectorAll('.menu-item-wrapper').forEach(el => observer.observe(el));
}

function initRevealAnimations() {
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}