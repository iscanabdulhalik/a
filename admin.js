document.addEventListener('DOMContentLoaded', () => {
    // Basic Login Logic
    const loginSection = document.getElementById('login-section');
    const adminPanel = document.getElementById('admin-panel');
    const loginBtn = document.getElementById('login-btn');
    const logoutBtn = document.getElementById('logout-btn');
    const errorMsg = document.getElementById('login-error');

    if (sessionStorage.getItem('isLoggedIn') === 'true') {
        showPanel();
    }

    loginBtn.addEventListener('click', () => {
        const user = document.getElementById('username').value;
        const pass = document.getElementById('password').value;
        if (user === 'admin' && pass === 'admin123') {
            sessionStorage.setItem('isLoggedIn', 'true');
            showPanel();
        } else {
            errorMsg.style.display = 'block';
        }
    });

    logoutBtn.addEventListener('click', () => {
        sessionStorage.removeItem('isLoggedIn');
        loginSection.style.display = 'block';
        adminPanel.style.display = 'none';
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    });

    let currentData = null;

    function showPanel() {
        loginSection.style.display = 'none';
        adminPanel.style.display = 'block';
        currentData = getMenuData();
        renderAdmin();
    }

    // Render Admin Interface
    function renderAdmin() {
        if (!currentData) currentData = {};
        if (!currentData.settings) currentData.settings = { restaurantName: 'SHORELINE', footerText: '' };
        if (!currentData.categories) currentData.categories = [];

        // Settings
        const settingName = document.getElementById('setting-name');
        const settingFooter = document.getElementById('setting-footer');
        
        // Remove previous event listeners by replacing elements to avoid duplicates
        const newName = settingName.cloneNode(true);
        settingName.parentNode.replaceChild(newName, settingName);
        const newFooter = settingFooter.cloneNode(true);
        settingFooter.parentNode.replaceChild(newFooter, settingFooter);

        newName.value = currentData.settings.restaurantName || '';
        newFooter.value = currentData.settings.footerText || '';

        newName.addEventListener('input', (e) => { currentData.settings.restaurantName = e.target.value; autoSave(); });
        newFooter.addEventListener('input', (e) => { currentData.settings.footerText = e.target.value; autoSave(); });

        // Categories
        const categoriesContainer = document.getElementById('categories-container');
        categoriesContainer.innerHTML = '';

        currentData.categories.forEach((cat, catIndex) => {
            const catDiv = document.createElement('div');
            catDiv.className = 'category-card';
            catDiv.innerHTML = `
                <div class="category-header">
                    <input type="text" value="${cat.name || ''}" data-index="${catIndex}" class="cat-name-input" placeholder="Kategori Adı">
                    <button class="btn btn-danger btn-sm del-cat-btn" data-index="${catIndex}">Kategoriyi Sil</button>
                </div>
                <div class="items-list" id="items-${catIndex}"></div>
                <div class="add-item-btn" data-index="${catIndex}">+ Bu Kategoriye Yeni Ürün Ekle</div>
            `;
            categoriesContainer.appendChild(catDiv);

            // Render Items
            const itemsList = document.getElementById(`items-${catIndex}`);
            if (!cat.items) cat.items = [];
            cat.items.forEach((item, itemIndex) => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'item-row';
                itemDiv.innerHTML = `
                    <input type="text" class="w-name item-input" data-cat="${catIndex}" data-item="${itemIndex}" data-field="name" value="${item.name || ''}" placeholder="Ürün Adı">
                    <input type="text" class="w-price item-input" data-cat="${catIndex}" data-item="${itemIndex}" data-field="price" value="${item.price || ''}" placeholder="Fiyat (örn: 120.00 ₺)">
                    <input type="text" class="w-img item-input" data-cat="${catIndex}" data-item="${itemIndex}" data-field="image" value="${item.image || ''}" placeholder="Görsel Adı (opsiyonel)">
                    <div class="item-actions">
                        <button class="btn btn-danger btn-sm del-item-btn" data-cat="${catIndex}" data-item="${itemIndex}">Sil</button>
                    </div>
                    <input type="text" class="w-desc item-input" data-cat="${catIndex}" data-item="${itemIndex}" data-field="description" value="${item.description || ''}" placeholder="Ürün İçeriği/Açıklaması">
                `;
                itemsList.appendChild(itemDiv);
            });
        });

        attachEventListeners();
    }

    function attachEventListeners() {
        // Category Name Update
        document.querySelectorAll('.cat-name-input').forEach(input => {
            input.addEventListener('input', (e) => {
                const idx = e.target.getAttribute('data-index');
                currentData.categories[idx].name = e.target.value;
                autoSave();
            });
        });

        // Delete Category
        document.querySelectorAll('.del-cat-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                if(confirm("Kategoriyi ve içindeki tüm ürünleri silmek istediğinize emin misiniz?")) {
                    const idx = e.target.getAttribute('data-index');
                    currentData.categories.splice(idx, 1);
                    autoSave();
                    renderAdmin();
                }
            });
        });

        // Add Category
        const addCatBtn = document.getElementById('add-category-btn');
        const newAddCatBtn = addCatBtn.cloneNode(true);
        addCatBtn.parentNode.replaceChild(newAddCatBtn, addCatBtn);
        newAddCatBtn.addEventListener('click', () => {
            currentData.categories.push({ id: 'cat_' + Date.now(), name: 'Yeni Kategori', items: [] });
            autoSave();
            renderAdmin();
        });

        // Add Item
        document.querySelectorAll('.add-item-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idx = e.target.getAttribute('data-index');
                currentData.categories[idx].items.push({ id: 'item_' + Date.now(), name: 'Yeni Ürün', price: '0.00 ₺', description: '', image: '' });
                autoSave();
                renderAdmin();
            });
        });

        // Delete Item
        document.querySelectorAll('.del-item-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const cIdx = e.target.getAttribute('data-cat');
                const iIdx = e.target.getAttribute('data-item');
                currentData.categories[cIdx].items.splice(iIdx, 1);
                autoSave();
                renderAdmin();
            });
        });

        // Item Field Update
        document.querySelectorAll('.item-input').forEach(input => {
            input.addEventListener('input', (e) => {
                const cIdx = e.target.getAttribute('data-cat');
                const iIdx = e.target.getAttribute('data-item');
                const field = e.target.getAttribute('data-field');
                currentData.categories[cIdx].items[iIdx][field] = e.target.value;
                autoSave();
            });
        });
    }

    function autoSave() {
        saveMenuData(currentData);
    }

    // Export Feature (For GitHub deployment)
    document.getElementById('export-btn').addEventListener('click', () => {
        const jsContent = `const initialData = ${JSON.stringify(currentData, null, 4)};

// Fonksiyon: Veriyi LocalStorage'dan al veya initialData'yı kullan
function getMenuData() {
    const savedData = localStorage.getItem("menuData");
    if (savedData) {
        return JSON.parse(savedData);
    }
    return initialData;
}

// Fonksiyon: Veriyi LocalStorage'a kaydet (Admin paneli için)
function saveMenuData(data) {
    localStorage.setItem("menuData", JSON.stringify(data));
}`;
        
        const blob = new Blob([jsContent], { type: 'text/javascript' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'data.js';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
});
