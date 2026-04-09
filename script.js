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
    document.getElementById('restaurant-name').textContent = data.settings.restaurantName || "SHORELINE";
    document.getElementById('footer-text').textContent = data.settings.footerText || "AFİYET OLSUN";

    const container = document.getElementById('menu-container');
    container.innerHTML = ''; // Clear container
    
    const navContainer = document.getElementById('category-nav');
    navContainer.innerHTML = ''; // Clear nav

    data.categories.forEach((category, idx) => {
        if (!category.items || category.items.length === 0) return;

        // Generate Nav Button
        const navBtn = document.createElement('button');
        navBtn.className = 'cat-nav-btn';
        if (idx === 0) navBtn.classList.add('active'); // active first item
        navBtn.textContent = category.name;
        navBtn.setAttribute('data-target', `cat-${category.id}`);
        navBtn.addEventListener('click', () => {
            const target = document.getElementById(`cat-${category.id}`);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                // Make all in-active
                document.querySelectorAll('.cat-nav-btn').forEach(b => b.classList.remove('active'));
                navBtn.classList.add('active');
            }
        });
        navContainer.appendChild(navBtn);

        // Create Category Element
        const categoryDiv = document.createElement('section');
        categoryDiv.className = 'category';
        categoryDiv.id = `cat-${category.id}`;

        const categoryTitle = document.createElement('h2');
        categoryTitle.className = 'category-title';
        categoryTitle.textContent = category.name;
        categoryDiv.appendChild(categoryTitle);

        // Generate Items
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

            // Add Image if exists
            if (item.image) {
                const imgContainer = document.createElement('div');
                imgContainer.className = 'image-container';

                const itemImg = document.createElement('img');
                itemImg.className = 'item-image';
                itemImg.src = item.image;
                itemImg.alt = item.name;
                itemImg.loading = "lazy";
                
                // Keep image hidden if it fails to load
                itemImg.onerror = function() { imgContainer.style.display = 'none'; };
                
                imgContainer.appendChild(itemImg);
                itemDiv.appendChild(imgContainer);
            }

            wrapper.appendChild(itemDiv);
            categoryDiv.appendChild(wrapper);
        });

        container.appendChild(categoryDiv);
    });
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
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.menu-item-wrapper');
    elementsToAnimate.forEach(el => observer.observe(el));
    
    // Observer for updating the active nav button
    const navObserverOptions = {
        root: null,
        rootMargin: '-100px 0px -60% 0px', // Activate when passing top 100px
        threshold: 0
    };
    
    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                document.querySelectorAll('.cat-nav-btn').forEach(b => {
                    b.classList.remove('active');
                    if (b.getAttribute('data-target') === id) {
                        b.classList.add('active');
                        // Scroll nav container so button is visible horizontally
                        b.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                    }
                });
            }
        });
    }, navObserverOptions);
    
    document.querySelectorAll('.category').forEach(cat => navObserver.observe(cat));
}
