document.addEventListener('DOMContentLoaded', () => {
    renderMenu();
});

function renderMenu() {
    const data = getMenuData();
    
    // Set Header/Footer Text
    document.getElementById('restaurant-name').textContent = data.settings.restaurantName || "MODA KAFE";
    document.getElementById('footer-text').textContent = data.settings.footerText || "AFİYET OLSUN";

    const container = document.getElementById('menu-container');
    container.innerHTML = ''; // Clear container

    data.categories.forEach(category => {
        if (!category.items || category.items.length === 0) return;

        // Create Category Element
        const categoryDiv = document.createElement('section');
        categoryDiv.className = 'category';

        const categoryTitle = document.createElement('h2');
        categoryTitle.className = 'category-title';
        categoryTitle.textContent = category.name;
        categoryDiv.appendChild(categoryTitle);

        // Generate Items
        category.items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'menu-item';

            const itemContent = document.createElement('div');
            itemContent.className = 'item-content';

            const itemHeader = document.createElement('div');
            itemHeader.className = 'item-header';

            const itemName = document.createElement('h3');
            itemName.className = 'item-name';
            itemName.textContent = item.name;

            const itemPrice = document.createElement('span');
            itemPrice.className = 'item-price';
            itemPrice.textContent = item.price;

            itemHeader.appendChild(itemName);
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
                const itemImg = document.createElement('img');
                itemImg.className = 'item-image';
                itemImg.src = item.image;
                itemImg.alt = item.name;
                // Add an error handler for missing images gracefully
                itemImg.onerror = function() { this.style.display = 'none'; };
                itemDiv.appendChild(itemImg);
            }

            categoryDiv.appendChild(itemDiv);
        });

        container.appendChild(categoryDiv);
    });
}
