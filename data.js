const initialData = {
    "categories": [
        {
            "id": "kahveler",
            "name": "Kahveler",
            "items": [
                {
                    "id": "k1",
                    "name": "Espresso",
                    "description": "Küçük ama güçlü bir kahve, yoğun ve aromatik.",
                    "price": "120.00 ₺",
                    "image": "delicious-coffee-beans-cup.jpg"
                },
                {
                    "id": "k2",
                    "name": "Americano",
                    "description": "Espresso üzerine sıcak su eklenerek yapılır, daha hafif ve içimi kolaydır.",
                    "price": "130.00 ₺"
                },
                {
                    "id": "k3",
                    "name": "Latte",
                    "description": "Espresso, bol miktarda sıcak süt ve hafif süt köpüğü ile yapılır.",
                    "price": "125.00 ₺"
                },
                {
                    "id": "k4",
                    "name": "Cappuccino",
                    "description": "Eşit miktarda espresso, sıcak süt ve kalın süt köpüğü içerir.",
                    "price": "135.00 ₺",
                    "image": "front-view-cup-cappuccino-with-cookies-book-table.jpg"
                }
            ]
        },
        {
            "id": "caylar",
            "name": "Çaylar",
            "items": [
                {
                    "id": "c1",
                    "name": "Siyah Çay",
                    "description": "Geleneksel demleme siyah çay.",
                    "price": "50.00 ₺",
                    "image": "glass-tea.jpg"
                },
                {
                    "id": "c2",
                    "name": "Bitki Çayları",
                    "description": "Papatya, nane, rooibos, hibiskus gibi çeşitli seçenekler.",
                    "price": "85.00 ₺"
                },
                {
                    "id": "c3",
                    "name": "Chai Tea Latte",
                    "description": "Baharatlı siyah çay, süt ve tarçın eşliğinde.",
                    "price": "90.00 ₺"
                }
            ]
        },
        {
            "id": "tatlilar",
            "name": "Tatlılar",
            "items": [
                {
                    "id": "t1",
                    "name": "Cheesecake",
                    "description": "Krem peynirli pasta, üzerine meyve sosu veya çikolata sosu.",
                    "price": "180.00 ₺"
                },
                {
                    "id": "t2",
                    "name": "Tiramisu",
                    "description": "Kahve ve mascarpone peyniri ile yapılan klasik İtalyan tatlısı.",
                    "price": "170.00 ₺"
                },
                {
                    "id": "t3",
                    "name": "Brownie",
                    "description": "Çikolatalı, yoğun ve nemli kek.",
                    "price": "185.00 ₺"
                }
            ]
        }
    ],
    "settings": {
        "restaurantName": "MODA KAFE",
        "footerText": "menüdeki tüm ürünlerimiz günlük olarak hazırlanmaktadır."
    }
};

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
}