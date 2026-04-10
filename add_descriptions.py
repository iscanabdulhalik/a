import json
import re

descriptions = {
    "Patates Tava": "Özel baharatlarla harmanlanmış kalın kesim çıtır patates.",
    "Elma Dilim": "Baharatlı ve dışı çıtır, içi yumuşacık elma dilim patates.",
    "Soğan Halkası": "Özel sepette servis edilen, altın sarısı çıtır soğan halkaları.",
    "Mozarella Stick": "Uzayan peynir keyfi, yanında özel sos ile.",
    "Paçanga Böreği": "Pastırma ve eriyen kaşarın efsanevi buluşması.",
    "Sigara Böreği": "Taze peynirli, ince hamurdan sarılmış çıtır çıtır klasik lezzet.",
    "Çıtır Tavuk": "Özel pane harcıyla kızartılmış, leziz tavuk parçaları.",
    "Combo Tabak": "Patates, soğan halkası, çıtır tavuk ve peynir çubuklarından oluşan karma tabak.",
    "Izgara Köfte": "Özenle hazırlanmış, tam kıvamında pişmiş ızgara kasap köfte.",
    "Klasik Burger": "Özel burger köftesi, taze yeşillikler ve karamelize soğan.",
    "Cheese Burger": "Eriyen cheddar peyniri, ev yapımı köfte ve özel sos.",
    "Double Burger": "İki kat doyum! Çift burger köftesi ve bol malzeme.",
    "Tavuk Burger": "Çıtır paneli tavuk göğsü, taze marul ve mayonez.",
    "Karışık Tost": "Sucuk ve kaşar peynirinin tost ekmeğiyle sıcak buluşması.",
    "Kaşarlı Tost": "Erimiş bol kaşar peyniri ve kalın kesim tost ekmeği.",
    "Çift Kaşarlı Tost": "Peynir severler için ekstra kaşarlı, doyurucu lezzet.",
    "Beyaz Peynirli Tost": "Hafif ve lezzetli beyaz peynir ile domates dilimleri.",
    "Kaşarlı Gözleme": "İncecik açılmış hamurda, sıcacık eriyen kaşar peyniri.",
    "Kıymalı Gözleme": "Özel baharatla kavrulmuş nefis bol kıymalı harç.",
    "Patatesli Gözleme": "Fırınlanmış patates ve baharatların hafif harmanıyla.",
    "Peynirli Gözleme": "Yöresel beyaz peynir ve maydanozun enfes uyumu.",
    "Espresso": "Taze çekilmiş %100 Arabica çekirdeklerinden yoğun aroma.",
    "Double Espresso": "Daha sert bir deneyim için iki shot Arabica espresso.",
    "Americano": "Sıcak su ile inceltilmiş zengin espresso lezzeti.",
    "Latte": "Espresso, buharla ısıtılmış ipeksi süt ve ince köpük dengesi.",
    "Cappuccino": "Kalın köpüklü, yoğun espresso ve taze sütün klasiği.",
    "Flat White": "İnce süt köpüğü ile kahve tadını ön plana çıkaran lezzet.",
    "Cortado": "Eşit oranda espresso ve sıcak sütün pürüzsüz birleşimi.",
    "Mocha": "Çikolata şurubu, sıcak süt ve espressonun tatlı dengesi.",
    "White Chocolate Mocha": "Beyaz çikolata ile yumuşak içimli efsane kahve.",
    "Caramel Macchiato": "Karamel şurubu, vanilya, süt ve espresso katmanları.",
    "Red Eye": "Filtre kahve üzerine ekstra espresso shot ilavesi.",
    "Filtre Kahve": "Yavaş demlenmiş, yumuşak ve pürüzsüz içimli taze kahve.",
    "Montana": "Kendine has aromasıyla özel çekirdek harmanımız.",
    "Türk Kahvesi": "Ustaca kavrulmuş, bol köpüklü geleneksel Türk kahvesi.",
    "Double Türk Kahvesi": "Kahve keyfini uzun tutmak isteyenlere özel duble fincan.",
    "Menengiç": "Kafeinsiz, kendine has fıstık aromasıyla yöresel lezzet.",
    "Dibek": "Özel tokmakla dövülmüş, yumuşak ve kıvamlı anadolu kahvesi.",
    "Damla Sakızlı Türk Kahvesi": "Ege'den gelen ferah damla sakızı aromalı klasik kahve.",
    "Sütlü Türk Kahvesi": "Su yerine taze süt ile pişirilmiş yumuşak Türk kahvesi.",
    "Dağ Çilekli Türk Kahvesi": "Hafif çilek aromasıyla tatlandırılmış farklı bir deneyim.",
    "Ice Latte": "Buzlu süt ve espressonun ferahlatıcı klasik buluşması.",
    "Ice Americano": "Buz ile servis edilen canlandırıcı espresso.",
    "Ice Mocha": "Buzlu süt, çikolata ve espressonun serinleten tatlı formu.",
    "Ice White Mocha": "Beyaz çikolatanın serinliği ve kahve aromasının aşkı.",
    "Ice Caramel Latte": "Karamel aromasıyla zenginleştirilmiş buz gibi latte.",
    "Ice Chai Tea Latte": "Baharatlı Hint çayının buzlu ve sütlü ferah versiyonu.",
    "Çay": "İnce belli bardakta, tam demiyle tavşan kanı Türk çayı.",
    "Fincan Çay": "Keyfi uzun sürenler için büyük fincanda taze demleme çay.",
    "Sıcak Çikolata": "Soğuk günlerin vazgeçilmezi yoğun çikolata lezzeti.",
    "Salep": "Bol tarçınlı, içi ısıtan geleneksel kış içeceği.",
    "Chai Tea Latte": "Özel baharatlarla harmanlanmış siyah çay ve sıcak süt.",
    "Milkshake": "Vanilya, Çilek veya Çikolatalı tam kıvamında serin lezzet.",
    "Limonata": "Taze sıkım limonlardan elde edilmiş buz gibi ev yapımı limonata.",
    "Frozen": "Taze meyve püreleriyle hazırlanan yoğun buzlu ferahlık.",
    "Churchill": "Soda, limon ve tuzun canlandırıcı efsane karışımı.",
    "Fanta / Gazoz / Coca Cola / Coca Cola Zero": "Buz gibi servis edilen serin kutu içecekler.",
    "Ice Tea": "Şeftali veya limon aromalı soğuk çay ferahlığı.",
    "Meyveli Soda": "Farklı aromalarla tatlandırılmış meyveli maden suyu.",
    "Sade Soda": "Şişesinde buz gibi doğal maden suyu.",
    "Ayran": "Geleneksel lezzetlerimizin yanında bol köpüklü yayık ayran.",
    "Su": "Serin kaynak suyu."
}

with open('data.js', 'r') as f:
    text = f.read()

# Extract json
start_str = "intialData = {"
# it's const initialData = {
start_idx = text.find('const initialData = ') + len('const initialData = ')
end_idx = text.find('};', start_idx) + 1

json_str = text[start_idx:end_idx]
try:
    data = json.loads(json_str)
except Exception as e:
    print(f"Error parsing JSON: {e}")
    exit(1)

for cat in data.get('categories', []):
    for item in cat.get('items', []):
        if item.get('name') in descriptions:
            item['description'] = descriptions[item['name']]

new_json_str = json.dumps(data, indent=4, ensure_ascii=False)

# Update text
new_text = text[:start_idx] + new_json_str + text[end_idx:]
# Bump version from 6 to 7
new_text = new_text.replace('DATA_VERSION = "6"', 'DATA_VERSION = "7"')

with open('data.js', 'w') as f:
    f.write(new_text)

print("Updated data.js")
