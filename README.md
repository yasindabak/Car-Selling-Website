# Car Selling Website

Bu depo, kullanıcı dostu ve modern bir "Car Selling" (araba satışı) web sitesi şablonu içerir. Proje statik HTML, CSS ve JavaScript ile hazırlanmış olup, küçük işletmeler veya kişisel portföyler için hızlıca uyarlanabilecek temiz ve duyarlı bir ön yüz sunar.

## Özet

- Basit araç listeleme ve detay gösterimi
- Marka / model / yıl / fiyat gibi filtreleme ve arama özellikleri
- Duyarlı (responsive) tasarım: mobil ve masaüstünde iyi görünür
- Görsel odaklı kart düzeni, galeri ve etkileşimli öğeler

Repo dil dağılımı (tahmini):
- HTML: %55
- JavaScript: %30.6
- CSS: %14.4

## Teknolojiler

- HTML5
- CSS3 (veya tercih edilirse SCSS)
- Vanilla JavaScript
- Bootstrap (opsiyonel olarak projede kullanıldıysa)
- Font Awesome (ikonlar için)

## Özellikler

- Anasayfa: Öne çıkan araçlar ve filtreleme
- Araç listesi: Kartlar halinde araç gösterimi
- Araç detayı: Görseller, açıklama, teknik bilgiler
- İletişim formu: Ziyaretçilerin satıcıyla iletişime geçmesi için
- Basit arama ve filtreleme: Marka, fiyat aralığı ve modele göre
- Performans odaklı: Görsel optimizasyonu ve hızlı yükleme

## Kurulum ve çalıştırma

1. Depoyu klonlayın:

   git clone https://github.com/yasindabak/Car-Selling-Website.git

2. Proje dizinine gidin:

   cd Car-Selling-Website

3. Statik site olduğu için doğrudan `index.html` dosyasını tarayıcıda açabilirsiniz. Geliştirme için tercih edilen yöntemler:

   - Python 3 ile basit sunucu:

     python -m http.server 8000
     # ardından tarayıcıda http://localhost:8000 adresini açın

   - VS Code kullanıyorsanız "Live Server" eklentisi ile anında önizleme alabilirsiniz.

## Özelleştirme

- Veri kaynağı: Mevcut düz (hardcoded) araç verilerini JSON dosyasına veya bir API'ye bağlayarak dinamik hale getirebilirsiniz.
- Backend entegrasyonu: İlan ekleme, kullanıcı yönetimi, favoriler ve mesajlaşma için basit bir backend (Node.js, Django vb.) ekleyin.
- Stil ve tema: CSS/SCSS değişiklikleriyle marka renklerinizi ve tipografinizi uygulayın.
- Performans: Görselleri WebP formatına çevirme ve lazy-loading uygulama.

## Katkıda bulunma

Katkılar memnuniyetle karşılanır. Herhangi bir hata düzeltmesi, iyileştirme veya yeni özellik için aşağıdaki adımları izleyin:

1. Projeyi fork'layın
2. Yeni bir branch oluşturun: `git checkout -b feature/isim`
3. Değişikliklerinizi commit edin: `git commit -m "Açıklama"`
4. Branch'i push'layın ve pull request açın

Lütfen açık ve açıklayıcı commit mesajları kullanın ve büyük değişiklikler için bir issue açıp taslak paylaşın.

## Lisans

Bu projeye uygun bir lisans ekleyin (ör. MIT). Lisans yoksa, kullanım koşullarını ve katkı politikasını belirtin.

## İletişim

- GitHub: https://github.com/yasindabak
- Twitter / E-posta: (isteğe bağlı olarak ekleyin)

---

Teşekkürler! README'de görmek istediğiniz ek bölümler (ör. canlı demo linki, ekran görüntüleri, API dökümantasyonu) varsa belirtin; ben ekleyeyim.