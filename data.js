const initialData = {
    "categories": [
        {
            "id": "sicak-kahveler",
            "name": "Sıcak Kahveler",
            "items": [
                {
                    "id": "k1",
                    "name": "Espresso Single",
                    "description": "Küçük ve yoğun, okyanus esintili %100 Arabica çekirdeklerinden.",
                    "price": "90.00 ₺",
                    "image": "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "kd1",
                    "name": "Espresso Double",
                    "description": "Daha sert bir deneyim için iki shot Arabica espresso.",
                    "price": "120.00 ₺",
                    "image": "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "k2",
                    "name": "Americano",
                    "description": "Klasik double espresso üzerine sıcak su, yumuşak içim.",
                    "price": "130.00 ₺",
                    "image": "https://images.unsplash.com/photo-1551030173-122aabc4489c?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "k3",
                    "name": "Latte",
                    "description": "Espresso, buharla ısıtılmış ipeksi süt ve nazik köpük dokunuşu.",
                    "price": "145.00 ₺",
                    "image": "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "k4",
                    "name": "Cappuccino",
                    "description": "Koyu espresso, bol kremsi süt köpüğü ve çikolata tozu.",
                    "price": "145.00 ₺",
                    "image": "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "k5",
                    "name": "Flat White",
                    "description": "İnce süt köpüğü ile double ristretto, kahve tadını daha çok hissetmek isteyenlere.",
                    "price": "150.00 ₺",
                    "image": "https://images.unsplash.com/photo-1582214695420-562a05fc8234?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "k6",
                    "name": "Mocha",
                    "description": "Gerçek çikolata, espresso, sıcak süt ve krema.",
                    "price": "165.00 ₺",
                    "image": "https://images.unsplash.com/photo-1572442388796-11668aa44c0b?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "k7",
                    "name": "Cortado",
                    "description": "Eşit oranda espresso ve sıcak sütün harika dengesi.",
                    "price": "135.00 ₺"
                }
            ]
        },
        {
            "id": "3rd-nesil",
            "name": "3. Nesil Kahveler",
            "items": [
                {
                    "id": "dn1",
                    "name": "V60 Drip Coffee",
                    "description": "Etiyopya veya Kolombiya çekirdekleriyle özel demlenmiş 3. nesil filtre kahve.",
                    "price": "160.00 ₺",
                    "image": "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "dn2",
                    "name": "Chemex",
                    "description": "Yumuşak ve berrak bir içim sunan 2 kişilik paylaşımlı kahve.",
                    "price": "280.00 ₺",
                    "image": "https://images.unsplash.com/photo-1518057111178-44a106bad636?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "dn3",
                    "name": "Aeropress",
                    "description": "Basınçlı demleme tekniği ile yoğun aromalar.",
                    "price": "155.00 ₺"
                }
            ]
        },
        {
            "id": "soguk-kahveler",
            "name": "Soğuk Kahveler",
            "items": [
                {
                    "id": "s1",
                    "name": "Iced Latte",
                    "description": "Buzlu süt ve taze çekilmiş espresso'nun ferahlatıcı uyumu.",
                    "price": "155.00 ₺",
                    "image": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "s2",
                    "name": "Cold Brew",
                    "description": "16 saat soğuk demlenmiş, asiditesi düşük saf kahve lezzeti.",
                    "price": "165.00 ₺",
                    "image": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "s3",
                    "name": "Iced Americano",
                    "description": "Buz ile servis edilen serinletici espresso ve su dengesi.",
                    "price": "140.00 ₺",
                    "image": "https://images.unsplash.com/photo-1551509134-2e61df3f7f02?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "s4",
                    "name": "Iced Mocha",
                    "description": "Çikolata, espresso ve buzun tatlı uyumu.",
                    "price": "175.00 ₺"
                },
                {
                    "id": "s5",
                    "name": "Affogato",
                    "description": "Vanilyalı dondurma üzerine taze espresso shot.",
                    "price": "180.00 ₺",
                    "image": "https://images.unsplash.com/photo-1594801121102-861c8c88dcbf?auto=format&fit=crop&w=400&q=80"
                }
            ]
        },
        {
            "id": "frappe-milkshake",
            "name": "Frappe & Milkshake",
            "items": [
                {
                    "id": "fm1",
                    "name": "Karamel Frappe",
                    "description": "Kahve, buz, süt, karamel şurubu ve krem şanti.",
                    "price": "185.00 ₺",
                    "image": "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "fm2",
                    "name": "Çilekli Milkshake",
                    "description": "Taze çilek, süt ve dondurmanın yoğun kıvamı.",
                    "price": "175.00 ₺",
                    "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "fm3",
                    "name": "Oreo Milkshake",
                    "description": "Oreo bisküvileri, vanilyalı dondurma, krema.",
                    "price": "180.00 ₺"
                }
            ]
        },
        {
            "id": "cay-kismi",
            "name": "Çaylar",
            "items": [
                {
                    "id": "c1",
                    "name": "Demleme Rize Çayı",
                    "description": "İnce belli bardakta klasik lezzet.",
                    "price": "50.00 ₺",
                    "image": "https://images.unsplash.com/photo-1626015578701-49fc7cba9e03?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "c2",
                    "name": "Chai Tea Latte",
                    "description": "Doğu baharatlarının sıcak süt ile enfes buluşması.",
                    "price": "140.00 ₺",
                    "image": "https://images.unsplash.com/photo-1576092762744-5cf12d1b8c0a?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "c3",
                    "name": "Yeşil Çay",
                    "description": "Antioksidan deposu sade veya yaseminli seçenek.",
                    "price": "85.00 ₺",
                    "image": "https://images.unsplash.com/photo-1582793988950-7472dd9603f9?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "c4",
                    "name": "Kış Çayı",
                    "description": "Ihlamur, zencefil, tarçın, elma ve bal.",
                    "price": "110.00 ₺"
                }
            ]
        },
        {
            "id": "taze-sikim",
            "name": "Meyve Suyu & Detoks",
            "items": [
                {
                    "id": "ts1",
                    "name": "Taze Portakal Suyu",
                    "description": "Günlük sıkım, katkısız taze portakal suyu.",
                    "price": "130.00 ₺",
                    "image": "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "ts2",
                    "name": "Yeşil Detoks",
                    "description": "Yeşil elma, salatalık, ıspanak, zencefil, limon.",
                    "price": "165.00 ₺",
                    "image": "https://images.unsplash.com/photo-1622597467836-f38240662d5e?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "ts3",
                    "name": "Limonata",
                    "description": "Ev yapımı, ferahlatıcı naneli limonata.",
                    "price": "110.00 ₺",
                    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80"
                }
            ]
        },
        {
            "id": "kahvalti-sandvic",
            "name": "Kahvaltı & Sandviç",
            "items": [
                {
                    "id": "ks1",
                    "name": "Avokado Poşe Yumurta",
                    "description": "Ekşi maya ekmek üzeri ezme avokado, zeytinyağı ve poşe yumurta.",
                    "price": "240.00 ₺",
                    "image": "https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "ks2",
                    "name": "Hindi Füme Kaşar Kruvasan",
                    "description": "Ilık kruvasan arasında hindi füme, kaşar ve yeşillikler.",
                    "price": "220.00 ₺",
                    "image": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "ks3",
                    "name": "Izgara Peynirli Tost",
                    "description": "Kalın dilim ekşi maya köy ekmeğine ezine ve kaşar peyniri karışımı.",
                    "price": "170.00 ₺",
                    "image": "https://images.unsplash.com/photo-1528735000313-039ec3a473f0?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "ks4",
                    "name": "Granola Bowl",
                    "description": "Ev yapımı şekersiz granola, yoğurt, mevsim meyveleri ve bal.",
                    "price": "195.00 ₺",
                    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=400&q=80"
                }
            ]
        },
        {
            "id": "tatlilar",
            "name": "Tatlılar",
            "items": [
                {
                    "id": "t1",
                    "name": "San Sebastian Cheesecake",
                    "description": "İçi akışkan, üzeri hafif yanık efsane lezzet. Çikolata sosu ile.",
                    "price": "220.00 ₺",
                    "image": "https://images.unsplash.com/photo-1633504581786-316c800052b8?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "t2",
                    "name": "Klasik Çikolatalı Brownie",
                    "description": "Yoğun Belçika çikolatalı, taptaze fırından.",
                    "price": "190.00 ₺",
                    "image": "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "t3",
                    "name": "Tiramisu",
                    "description": "Orijinal mascarpone peyniri ve espresso kekiyle.",
                    "price": "200.00 ₺",
                    "image": "https://images.unsplash.com/photo-1571115177098-24fa1487ca96?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "t4",
                    "name": "Magnolia",
                    "description": "Çilekli veya Muzlu seçenekleriyle hafif kavanoz tatlısı.",
                    "price": "160.00 ₺"
                },
                {
                    "id": "t5",
                    "name": "Limonlu Cheesecake",
                    "description": "Taze limon kabuklarıyla ferah bir tatlı alternatifi.",
                    "price": "200.00 ₺",
                    "image": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=400&q=80"
                }
            ]
        },
        {
            "id": "atistirmaliklar",
            "name": "Fırın & Kurabiye",
            "items": [
                {
                    "id": "a1",
                    "name": "Tereyağlı Kruvasan",
                    "description": "Taptaze, kat kat Fransız usulü çıtır sade kruvasan.",
                    "price": "110.00 ₺",
                    "image": "https://images.unsplash.com/photo-1555507036-ab1f40ce88cb?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "a2",
                    "name": "Çikolata Parçacıklı Kurabiye",
                    "description": "Dev boy, içi yumuşak Amerikan tarzı cookie.",
                    "price": "85.00 ₺",
                    "image": "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "a3",
                    "name": "Bademli Biscotti",
                    "description": "Kahvenizin yanında keyifli, çıtır İtalyan bisküvisi.",
                    "price": "60.00 ₺"
                }
            ]
        }
    ],
    "settings": {
        "restaurantName": "CALYPSO",
        "footerText": "Kıyı esintisiyle hazırlanan lezzetler. Her gün taze ve günlük."
    }
};

const DATA_VERSION = "2";

// Fonksiyon: Veriyi LocalStorage'dan al veya initialData'yı kullan
function getMenuData() {
    const savedVersion = localStorage.getItem("menuDataVersion");
    if (savedVersion !== DATA_VERSION) {
        // Versiyon uyuşmuyor, eski cache'i temizle ve yeni veriyi kullan
        localStorage.removeItem("menuData");
        localStorage.setItem("menuDataVersion", DATA_VERSION);
        return initialData;
    }
    const savedData = localStorage.getItem("menuData");
    if (savedData) {
        return JSON.parse(savedData);
    }
    return initialData;
}

// Fonksiyon: Veriyi LocalStorage'a kaydet (Admin paneli için)
function saveMenuData(data) {
    localStorage.setItem("menuData", JSON.stringify(data));
    localStorage.setItem("menuDataVersion", DATA_VERSION);
}