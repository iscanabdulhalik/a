const initialData = {
    "categories": [
        {
            "id": "atistirmaliklar",
            "name": "Atıştırmalıklar",
            "items": [
                {
                    "id": "at1",
                    "name": "Patates Tava",
                    "description": "Özel baharatlarla harmanlanmış kalın kesim çıtır patates.",
                    "price": "200.00 ₺",
                    "image": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "at2",
                    "name": "Elma Dilim",
                    "description": "Baharatlı ve dışı çıtır, içi yumuşacık elma dilim patates.",
                    "price": "220.00 ₺",
                    "image": "https://images.unsplash.com/photo-1590165482155-a5083fcbaeba?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "at3",
                    "name": "Soğan Halkası",
                    "description": "Özel sepette servis edilen, altın sarısı çıtır soğan halkaları.",
                    "price": "120.00 ₺",
                    "image": "https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "at4",
                    "name": "Mozarella Stick",
                    "description": "Uzayan peynir keyfi, yanında özel sos ile.",
                    "price": "220.00 ₺",
                    "image": "https://images.unsplash.com/photo-1531749668029-2db88e4276c7?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "at5",
                    "name": "Paçanga Böreği",
                    "description": "Pastırma ve eriyen kaşarın efsanevi buluşması.",
                    "price": "350.00 ₺",
                    "image": "https://images.unsplash.com/photo-1601314115160-26fecd835e58?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "at6",
                    "name": "Sigara Böreği",
                    "description": "Taze peynirli, ince hamurdan sarılmış çıtır çıtır klasik lezzet.",
                    "price": "220.00 ₺",
                    "image": "https://plus.unsplash.com/premium_photo-1663852705824-388f615392d4?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "at7",
                    "name": "Çıtır Tavuk",
                    "description": "Özel pane harcıyla kızartılmış, leziz tavuk parçaları.",
                    "price": "280.00 ₺",
                    "image": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "at8",
                    "name": "Combo Tabak",
                    "description": "Patates, soğan halkası, çıtır tavuk ve peynir çubuklarından oluşan karma tabak.",
                    "price": "360.00 ₺",
                    "image": "https://images.unsplash.com/photo-1600803907087-f56d462fd26b?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "at9",
                    "name": "Izgara Köfte",
                    "description": "Özenle hazırlanmış, tam kıvamında pişmiş ızgara kasap köfte.",
                    "price": "490.00 ₺",
                    "image": "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=400&q=80"
                }
            ]
        },
        {
            "id": "burgerler",
            "name": "Burgerler",
            "items": [
                {
                    "id": "bg1",
                    "name": "Klasik Burger",
                    "description": "Özel burger köftesi, taze yeşillikler ve karamelize soğan.",
                    "price": "380.00 ₺",
                    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "bg2",
                    "name": "Cheese Burger",
                    "description": "Eriyen cheddar peyniri, ev yapımı köfte ve özel sos.",
                    "price": "400.00 ₺",
                    "image": "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "bg3",
                    "name": "Double Burger",
                    "description": "İki kat doyum! Çift burger köftesi ve bol malzeme.",
                    "price": "480.00 ₺",
                    "image": "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "bg4",
                    "name": "Tavuk Burger",
                    "description": "Çıtır paneli tavuk göğsü, taze marul ve mayonez.",
                    "price": "330.00 ₺",
                    "image": "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=400&q=80"
                }
            ]
        },
        {
            "id": "tostlar",
            "name": "Tostlar",
            "items": [
                {
                    "id": "ts1",
                    "name": "Karışık Tost",
                    "description": "Sucuk ve kaşar peynirinin tost ekmeğiyle sıcak buluşması.",
                    "price": "300.00 ₺",
                    "image": "tost.jpg"
                },
                {
                    "id": "ts2",
                    "name": "Kaşarlı Tost",
                    "description": "Erimiş bol kaşar peyniri ve kalın kesim tost ekmeği.",
                    "price": "250.00 ₺",
                    "image": "https://images.unsplash.com/photo-1518042459039-b903061616c2?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "ts3",
                    "name": "Çift Kaşarlı Tost",
                    "description": "Peynir severler için ekstra kaşarlı, doyurucu lezzet.",
                    "price": "300.00 ₺",
                    "image": "https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "ts4",
                    "name": "Beyaz Peynirli Tost",
                    "description": "Hafif ve lezzetli beyaz peynir ile domates dilimleri.",
                    "price": "280.00 ₺",
                    "image": "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=400&q=80"
                }
            ]
        },
        {
            "id": "gozlemeler",
            "name": "Gözlemeler",
            "items": [
                {
                    "id": "gz1",
                    "name": "Kaşarlı Gözleme",
                    "description": "İncecik açılmış hamurda, sıcacık eriyen kaşar peyniri.",
                    "price": "300.00 ₺",
                    "image": "gozleme.jpg"
                },
                {
                    "id": "gz2",
                    "name": "Kıymalı Gözleme",
                    "description": "Özel baharatla kavrulmuş nefis bol kıymalı harç.",
                    "price": "300.00 ₺",
                    "image": "gozleme.jpg"
                },
                {
                    "id": "gz3",
                    "name": "Patatesli Gözleme",
                    "description": "Fırınlanmış patates ve baharatların hafif harmanıyla.",
                    "price": "280.00 ₺",
                    "image": "gozleme.jpg"
                },
                {
                    "id": "gz4",
                    "name": "Peynirli Gözleme",
                    "description": "Yöresel beyaz peynir ve maydanozun enfes uyumu.",
                    "price": "280.00 ₺",
                    "image": "gozleme.jpg"
                }
            ]
        },
        {
            "id": "sicak-kahveler",
            "name": "Sıcak Kahveler",
            "items": [
                {
                    "id": "sk1",
                    "name": "Espresso",
                    "description": "Taze çekilmiş %100 Arabica çekirdeklerinden yoğun aroma.",
                    "price": "100.00 ₺",
                    "image": "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "sk2",
                    "name": "Double Espresso",
                    "description": "Daha sert bir deneyim için iki shot Arabica espresso.",
                    "price": "120.00 ₺",
                    "image": "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "sk3",
                    "name": "Americano",
                    "description": "Sıcak su ile inceltilmiş zengin espresso lezzeti.",
                    "price": "140.00 ₺",
                    "image": "https://images.unsplash.com/photo-1551030173-122aabc4489c?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "sk4",
                    "name": "Latte",
                    "description": "Espresso, buharla ısıtılmış ipeksi süt ve ince köpük dengesi.",
                    "price": "160.00 ₺",
                    "image": "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "sk5",
                    "name": "Cappuccino",
                    "description": "Kalın köpüklü, yoğun espresso ve taze sütün klasiği.",
                    "price": "160.00 ₺",
                    "image": "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "sk6",
                    "name": "Flat White",
                    "description": "İnce süt köpüğü ile kahve tadını ön plana çıkaran lezzet.",
                    "price": "160.00 ₺",
                    "image": "https://images.unsplash.com/photo-1582214695420-562a05fc8234?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "sk7",
                    "name": "Cortado",
                    "description": "Eşit oranda espresso ve sıcak sütün pürüzsüz birleşimi.",
                    "price": "170.00 ₺",
                    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "sk8",
                    "name": "Mocha",
                    "description": "Çikolata şurubu, sıcak süt ve espressonun tatlı dengesi.",
                    "price": "180.00 ₺",
                    "image": "https://images.unsplash.com/photo-1572442388796-11668aa44c0b?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "sk9",
                    "name": "White Chocolate Mocha",
                    "description": "Beyaz çikolata ile yumuşak içimli efsane kahve.",
                    "price": "180.00 ₺",
                    "image": "https://images.unsplash.com/photo-1572442388796-11668aa44c0b?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "sk10",
                    "name": "Caramel Macchiato",
                    "description": "Karamel şurubu, vanilya, süt ve espresso katmanları.",
                    "price": "180.00 ₺",
                    "image": "https://images.unsplash.com/photo-1485600649718-4a6c8e3ccfe8?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "sk11",
                    "name": "Red Eye",
                    "description": "Filtre kahve üzerine ekstra espresso shot ilavesi.",
                    "price": "160.00 ₺",
                    "image": "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "sk12",
                    "name": "Filtre Kahve",
                    "description": "Yavaş demlenmiş, yumuşak ve pürüzsüz içimli taze kahve.",
                    "price": "190.00 ₺",
                    "image": "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "sk13",
                    "name": "Montana",
                    "description": "Kendine has aromasıyla özel çekirdek harmanımız.",
                    "price": "170.00 ₺",
                    "image": "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=400&q=80"
                }
            ]
        },
        {
            "id": "geleneksel-kahveler",
            "name": "Geleneksel Kahveler",
            "items": [
                {
                    "id": "gk1",
                    "name": "Türk Kahvesi",
                    "description": "Ustaca kavrulmuş, bol köpüklü geleneksel Türk kahvesi.",
                    "price": "100.00 ₺",
                    "image": "geleneksel-kahveler.jpg"
                },
                {
                    "id": "gk2",
                    "name": "Double Türk Kahvesi",
                    "description": "Kahve keyfini uzun tutmak isteyenlere özel duble fincan.",
                    "price": "120.00 ₺",
                    "image": "geleneksel-kahveler.jpg"
                },
                {
                    "id": "gk3",
                    "name": "Menengiç",
                    "description": "Kafeinsiz, kendine has fıstık aromasıyla yöresel lezzet.",
                    "price": "120.00 ₺",
                    "image": "geleneksel-kahveler.jpg"
                },
                {
                    "id": "gk4",
                    "name": "Dibek",
                    "description": "Özel tokmakla dövülmüş, yumuşak ve kıvamlı anadolu kahvesi.",
                    "price": "110.00 ₺",
                    "image": "geleneksel-kahveler.jpg"
                },
                {
                    "id": "gk5",
                    "name": "Damla Sakızlı Türk Kahvesi",
                    "description": "Ege'den gelen ferah damla sakızı aromalı klasik kahve.",
                    "price": "110.00 ₺",
                    "image": "geleneksel-kahveler.jpg"
                },
                {
                    "id": "gk6",
                    "name": "Sütlü Türk Kahvesi",
                    "description": "Su yerine taze süt ile pişirilmiş yumuşak Türk kahvesi.",
                    "price": "120.00 ₺",
                    "image": "geleneksel-kahveler.jpg"
                },
                {
                    "id": "gk7",
                    "name": "Dağ Çilekli Türk Kahvesi",
                    "description": "Hafif çilek aromasıyla tatlandırılmış farklı bir deneyim.",
                    "price": "130.00 ₺",
                    "image": "geleneksel-kahveler.jpg"
                }
            ]
        },
        {
            "id": "soguk-kahveler",
            "name": "Soğuk Kahveler",
            "items": [
                {
                    "id": "sdk1",
                    "name": "Ice Latte",
                    "description": "Buzlu süt ve espressonun ferahlatıcı klasik buluşması.",
                    "price": "170.00 ₺",
                    "image": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "sdk2",
                    "name": "Ice Americano",
                    "description": "Buz ile servis edilen canlandırıcı espresso.",
                    "price": "160.00 ₺",
                    "image": "https://images.unsplash.com/photo-1551509134-2e61df3f7f02?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "sdk3",
                    "name": "Ice Mocha",
                    "description": "Buzlu süt, çikolata ve espressonun serinleten tatlı formu.",
                    "price": "180.00 ₺",
                    "image": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "sdk4",
                    "name": "Ice White Mocha",
                    "description": "Beyaz çikolatanın serinliği ve kahve aromasının aşkı.",
                    "price": "180.00 ₺",
                    "image": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "sdk5",
                    "name": "Ice Caramel Latte",
                    "description": "Karamel aromasıyla zenginleştirilmiş buz gibi latte.",
                    "price": "180.00 ₺",
                    "image": "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "sdk6",
                    "name": "Ice Chai Tea Latte",
                    "description": "Baharatlı Hint çayının buzlu ve sütlü ferah versiyonu.",
                    "price": "170.00 ₺",
                    "image": "https://images.unsplash.com/photo-1576092762744-5cf12d1b8c0a?auto=format&fit=crop&w=400&q=80"
                }
            ]
        },
        {
            "id": "sicak-icecekler",
            "name": "Sıcak İçecekler",
            "items": [
                {
                    "id": "si1",
                    "name": "Çay",
                    "description": "İnce belli bardakta, tam demiyle tavşan kanı Türk çayı.",
                    "price": "35.00 ₺",
                    "image": "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "si2",
                    "name": "Fincan Çay",
                    "description": "Keyfi uzun sürenler için büyük fincanda taze demleme çay.",
                    "price": "50.00 ₺",
                    "image": "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "si3",
                    "name": "Sıcak Çikolata",
                    "description": "Soğuk günlerin vazgeçilmezi yoğun çikolata lezzeti.",
                    "price": "150.00 ₺",
                    "image": "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "si4",
                    "name": "Salep",
                    "description": "Bol tarçınlı, içi ısıtan geleneksel kış içeceği.",
                    "price": "150.00 ₺",
                    "image": "https://images.unsplash.com/photo-1606820251787-8f553dc791e8?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "si5",
                    "name": "Chai Tea Latte",
                    "description": "Özel baharatlarla harmanlanmış siyah çay ve sıcak süt.",
                    "price": "150.00 ₺",
                    "image": "https://images.unsplash.com/photo-1576092762744-5cf12d1b8c0a?auto=format&fit=crop&w=400&q=80"
                }
            ]
        },
        {
            "id": "soguk-icecekler",
            "name": "Soğuk İçecekler",
            "items": [
                {
                    "id": "sgi1",
                    "name": "Milkshake",
                    "description": "Vanilya, Çilek veya Çikolatalı tam kıvamında serin lezzet.",
                    "price": "240.00 ₺",
                    "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "sgi2",
                    "name": "Limonata",
                    "description": "Taze sıkım limonlardan elde edilmiş buz gibi ev yapımı limonata.",
                    "price": "150.00 ₺",
                    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "sgi3",
                    "name": "Frozen",
                    "description": "Taze meyve püreleriyle hazırlanan yoğun buzlu ferahlık.",
                    "price": "220.00 ₺",
                    "image": "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "sgi4",
                    "name": "Churchill",
                    "description": "Soda, limon ve tuzun canlandırıcı efsane karışımı.",
                    "price": "140.00 ₺",
                    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80"
                }
            ]
        },
        {
            "id": "mesrubatlar",
            "name": "Meşrubatlar",
            "items": [
                {
                    "id": "ms1",
                    "name": "Fanta / Gazoz / Coca Cola / Coca Cola Zero",
                    "description": "Buz gibi servis edilen serin kutu içecekler.",
                    "price": "100.00 ₺",
                    "image": "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "ms2",
                    "name": "Ice Tea",
                    "description": "Şeftali veya limon aromalı soğuk çay ferahlığı.",
                    "price": "90.00 ₺",
                    "image": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "ms3",
                    "name": "Meyveli Soda",
                    "description": "Farklı aromalarla tatlandırılmış meyveli maden suyu.",
                    "price": "75.00 ₺",
                    "image": "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "ms4",
                    "name": "Sade Soda",
                    "description": "Şişesinde buz gibi doğal maden suyu.",
                    "price": "60.00 ₺",
                    "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "ms5",
                    "name": "Ayran",
                    "description": "Geleneksel lezzetlerimizin yanında bol köpüklü yayık ayran.",
                    "price": "50.00 ₺",
                    "image": "https://images.unsplash.com/photo-1626082895617-2c6c06a86c67?auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": "ms6",
                    "name": "Su",
                    "description": "Serin kaynak suyu.",
                    "price": "35.00 ₺",
                    "image": "https://images.unsplash.com/photo-1559839913-1140226315ee?auto=format&fit=crop&w=400&q=80"
                }
            ]
        }
    ],
    "settings": {
        "restaurantName": "CALYPSO",
        "footerText": "Kıyı esintisiyle hazırlanan lezzetler. Her gün taze ve günlük."
    }
};

const DATA_VERSION = "10";

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